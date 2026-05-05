'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { PRINCIPIOS } from '@/lib/constants'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function Filosofia() {
  return (
    <section
      id="filosofia"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--off) 0%, var(--white) 100%)',
        paddingTop: '112px',
        paddingBottom: '112px',
      }}
    >
      {/* Organic blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px', left: '-80px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(168,216,168,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-60px', right: '-60px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(126,234,234,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ maxWidth: '600px', marginBottom: '64px' }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
            <SectionLabel>Filosofía</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] font-normal"
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.1,
              color: 'var(--ink)',
            }}
          >
            Lo que creo —<br />
            <em className="italic" style={{ color: 'var(--teal-500)' }}>y cómo actúo.</em>
          </motion.h2>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '24px', marginBottom: '56px' }}
        >
          {PRINCIPIOS.map((p) => (
            <motion.div
              key={p.num}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden bg-white group"
              style={{
                padding: '40px',
                border: '1px solid rgba(94,207,184,0.2)',
                boxShadow: '0 4px 24px rgba(26,175,168,0.06)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--teal-300)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26,175,168,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,207,184,0.2)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,175,168,0.06)'
              }}
            >
              {/* Bottom hover line */}
              <div
                className="absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--teal-300), var(--cyan))',
                }}
                aria-hidden="true"
              />

              {/* Emoji icon */}
              <span
                className="absolute"
                style={{ top: '32px', right: '32px', fontSize: '28px', opacity: 0.15 }}
                aria-hidden="true"
              >
                {p.icono}
              </span>

              {/* Number */}
              <span
                className="block font-[family-name:var(--font-space-mono)]"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: 'var(--teal-500)',
                  marginBottom: '16px',
                }}
              >
                {p.num} ·
              </span>

              {/* Title */}
              <h3
                className="font-[family-name:var(--font-syne)] font-bold"
                style={{
                  fontSize: '18px',
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                  marginBottom: '16px',
                }}
              >
                {p.titulo}
              </h3>

              {/* Text */}
              <p
                className="font-[family-name:var(--font-syne)]"
                style={{ fontSize: '14px', lineHeight: 1.75, color: '#5A7A78' }}
              >
                {p.texto}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <a
            href="https://www.linkedin.com/in/arturocaccha"
            target="_blank"
            rel="noopener noreferrer"
            id="filosofia-linkedin-cta"
            className="font-[family-name:var(--font-space-mono)] inline-flex items-center gap-2 transition-all duration-200"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'var(--teal-500)',
              borderBottom: '1px solid rgba(26,175,168,0.3)',
              paddingBottom: '2px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--teal-700)'
              e.currentTarget.style.borderBottomColor = 'var(--teal-500)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--teal-500)'
              e.currentTarget.style.borderBottomColor = 'rgba(26,175,168,0.3)'
            }}
          >
            🔗 Revisa mi trayectoria formativa completa en LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
