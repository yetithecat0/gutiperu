'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { GALERIA_DATA } from '@/lib/constants'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const PLACEHOLDER_PALETTES = [
  'linear-gradient(135deg, var(--teal-100) 0%, var(--teal-300) 100%)',
  'linear-gradient(135deg, rgba(168,216,168,0.4) 0%, var(--teal-100) 100%)',
  'linear-gradient(135deg, rgba(232,212,106,0.3) 0%, var(--teal-100) 100%)',
  'linear-gradient(135deg, var(--teal-100) 0%, rgba(126,234,234,0.4) 100%)',
  'linear-gradient(135deg, rgba(168,216,168,0.3) 0%, rgba(94,207,184,0.3) 100%)',
  'linear-gradient(135deg, rgba(126,234,234,0.3) 0%, var(--off) 100%)',
]

export default function GaleriaEuropa() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden"
      style={{ background: 'var(--white)', paddingTop: '112px', paddingBottom: '112px' }}
    >
      <div className="absolute inset-0 grid-overlay pointer-events-none" style={{ opacity: 0.5 }} aria-hidden="true" />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: '64px', maxWidth: '640px' }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
            <SectionLabel>Galería</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] font-normal"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.08, color: 'var(--ink)', marginBottom: '24px' }}
          >
            2024 — Cuando el lente<br />
            <em className="italic" style={{ color: 'var(--teal-500)' }}>cruzó el Atlántico.</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-syne)]"
            style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}
          >
            {GALERIA_DATA.intro}
          </motion.p>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: '24px', marginBottom: '64px' }}
        >
          {GALERIA_DATA.fotos.map((foto, i) => (
            <motion.div
              key={foto.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? 'row-span-2' : ''}`}
              style={{
                background: PLACEHOLDER_PALETTES[i % PLACEHOLDER_PALETTES.length],
                aspectRatio: i === 0 ? '3/4' : '4/3',
                border: '1px solid rgba(94,207,184,0.15)',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              aria-label={foto.caption}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(94,207,184,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(94,207,184,0.15)')}
            >
              {/* Scan shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)' }}
                aria-hidden="true"
              />

              {/* Image render */}
              {foto.src ? (
                <Image
                  src={foto.src}
                  alt={foto.caption}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                /* Camera icon placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: '16px' }}>
                  <span style={{ fontSize: '28px', opacity: 0.3 }} aria-hidden="true">📷</span>
                  <span
                    className="font-[family-name:var(--font-instrument-serif)] italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4"
                    style={{ fontSize: '14px', color: 'rgba(13,122,117,0.7)' }}
                  >
                    {foto.caption}
                  </span>
                </div>
              )}

              {/* Caption overlay bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{
                  padding: '16px 20px',
                  background: 'linear-gradient(to top, rgba(10,31,30,0.8), transparent)',
                }}
              >
                <span
                  className="block font-[family-name:var(--font-space-mono)] uppercase"
                  style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--white)' }}
                >
                  {foto.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <a
            href="/studio"
            id="galeria-cta-studio"
            className="font-[family-name:var(--font-space-mono)] uppercase inline-flex items-center transition-all duration-200"
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'var(--teal-500)',
              border: '1px solid rgba(26,175,168,0.3)',
              padding: '16px 32px',
              textDecoration: 'none',
              gap: '12px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--teal-500)'
              e.currentTarget.style.background = 'rgba(26,175,168,0.05)'
              e.currentTarget.style.gap = '16px'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(26,175,168,0.3)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.gap = '12px'
            }}
          >
            Ver portafolio completo en Guti Perú Studio
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
