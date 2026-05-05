'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { ORIGEN_DATA } from '@/lib/constants'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function Origen() {
  return (
    <section
      id="origen"
      className="relative overflow-hidden"
      style={{ background: 'var(--ink)', paddingTop: '112px', paddingBottom: '112px' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(94,207,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(94,207,184,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--teal-500), transparent)' }}
        aria-hidden="true"
      />

      {/* Decorative blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px', right: '-80px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(26,175,168,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]"
          style={{ gap: '80px', alignItems: 'start' }}
        >
          {/* LEFT — Textos */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
              <SectionLabel dark>{ORIGEN_DATA.eyebrow}</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-instrument-serif)] font-normal"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.1,
                color: 'var(--white)',
                marginBottom: '40px',
              }}
            >
              De Ica al mundo —{' '}
              <em className="italic" style={{ color: 'var(--teal-300)' }}>
                una trayectoria construida desde la curiosidad.
              </em>
            </motion.h2>

            {ORIGEN_DATA.parrafos.map((parrafo, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="font-[family-name:var(--font-syne)]"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: 'var(--muted)',
                  marginBottom: i < ORIGEN_DATA.parrafos.length - 1 ? '24px' : 0,
                }}
              >
                {parrafo}
              </motion.p>
            ))}
          </motion.div>

          {/* RIGHT — Timeline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:mt-24"
          >
            <div className="relative">
              {/* Vertical gradient line */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: '42px',
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'linear-gradient(180deg, var(--teal-500), transparent)',
                }}
                aria-hidden="true"
              />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {ORIGEN_DATA.hitos.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative group"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      paddingBottom: i < ORIGEN_DATA.hitos.length - 1 ? '28px' : 0,
                    }}
                  >
                    {/* Year */}
                    <div
                      className="font-[family-name:var(--font-space-mono)] font-bold flex-shrink-0"
                      style={{
                        width: '84px',
                        fontSize: '11px',
                        letterSpacing: '0.05em',
                        color: 'var(--teal-500)',
                        paddingTop: '2px',
                      }}
                    >
                      {item.anio}
                    </div>

                    {/* Dot */}
                    <div
                      className="flex-shrink-0 transition-colors duration-300"
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: '2px solid var(--teal-500)',
                        background: 'var(--ink)',
                        marginTop: '3px',
                        position: 'relative',
                        zIndex: 1,
                        animation: i === ORIGEN_DATA.hitos.length - 1
                          ? 'timelinePulse 2.5s ease-in-out infinite'
                          : 'none',
                      }}
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div style={{ flex: 1, paddingBottom: '2px' }}>
                      <p
                        className="font-[family-name:var(--font-syne)] font-semibold transition-colors duration-300"
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.4,
                          color: 'var(--white)',
                          marginBottom: '4px',
                        }}
                      >
                        {item.hito}
                      </p>
                      <p
                        className="font-[family-name:var(--font-syne)]"
                        style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5 }}
                      >
                        {item.detalle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
