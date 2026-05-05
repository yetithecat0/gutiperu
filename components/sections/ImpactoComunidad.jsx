'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { IMPACTO_DATA } from '@/lib/constants'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function ImpactoComunidad() {
  return (
    <section
      id="impacto"
      className="relative overflow-hidden"
      style={{ background: 'var(--off)', paddingTop: '112px', paddingBottom: '112px' }}
    >
      {/* Organic leaf blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-60px', right: '-60px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(168,216,168,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-40px', left: '-40px',
          width: '280px', height: '280px',
          background: 'radial-gradient(circle, rgba(94,207,184,0.15) 0%, transparent 70%)',
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
          style={{ marginBottom: '64px', maxWidth: '640px' }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
            <SectionLabel>Impacto & Comunidad</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] font-normal"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              lineHeight: 1.08,
              color: 'var(--ink)',
            }}
          >
            El negocio es importante.{' '}
            <em className="italic" style={{ color: 'var(--teal-500)' }}>El impacto, más.</em>
          </motion.h2>
        </motion.div>

        {/* Blocks grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '24px', marginBottom: '80px' }}
        >
          {IMPACTO_DATA.bloques.map((bloque) => (
            <motion.div
              key={bloque.subtitulo}
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
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26,175,168,0.12)'
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
                  background: 'linear-gradient(90deg, var(--leaf), var(--teal-300))',
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div style={{ marginBottom: '24px', height: '40px', display: 'flex', alignItems: 'center' }} aria-hidden="true">
                {bloque.icono.startsWith('/') ? (
                  <Image 
                    src={bloque.icono} 
                    alt={bloque.subtitulo} 
                    width={40} 
                    height={40} 
                    style={{ objectFit: 'contain', borderRadius: '4px' }} 
                  />
                ) : (
                  <span style={{ fontSize: '32px' }}>{bloque.icono}</span>
                )}
              </div>

              {/* Subtitle */}
              <h3
                className="font-[family-name:var(--font-syne)] font-bold transition-colors duration-300"
                style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '16px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              >
                {bloque.subtitulo}
              </h3>

              {/* Text */}
              <p
                className="font-[family-name:var(--font-syne)]"
                style={{ fontSize: '14px', color: '#5A7A78', lineHeight: 1.75 }}
              >
                {bloque.texto}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-[family-name:var(--font-instrument-serif)] italic text-center mx-auto"
          style={{
            maxWidth: '800px',
            fontSize: 'clamp(24px, 3vw, 32px)',
            lineHeight: 1.45,
            color: 'var(--teal-700)',
            padding: '40px',
            borderLeft: '4px solid rgba(94,207,184,0.3)',
            borderRight: '4px solid rgba(94,207,184,0.3)',
          }}
        >
          {IMPACTO_DATA.pullQuote}
        </motion.blockquote>
      </div>
    </section>
  )
}
