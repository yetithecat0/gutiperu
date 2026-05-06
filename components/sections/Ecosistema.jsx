'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROYECTOS } from '@/lib/constants'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

function ProjectCard({ proyecto, wide = false }) {
  const cardContent = (
    <>
      {/* Accent bar */}
      <div
        className="rounded-full"
        style={{ width: '32px', height: '3px', background: proyecto.accentColor, marginBottom: '24px' }}
        aria-hidden="true"
      />
      {/* Category */}
      <span
        className="block font-[family-name:var(--font-space-mono)] uppercase"
        style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '16px' }}
      >
        {proyecto.categoria}
      </span>
      {/* Name */}
      <h3
        className="font-[family-name:var(--font-syne)] font-bold transition-colors duration-300"
        style={{ fontSize: '20px', color: 'var(--white)', lineHeight: 1.3, marginBottom: '16px' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-300)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
      >
        {proyecto.nombre}
      </h3>
      {/* Description */}
      <p
        className="font-[family-name:var(--font-syne)]"
        style={{ fontSize: '14px', color: '#5A8888', lineHeight: 1.65, marginBottom: '32px' }}
      >
        {proyecto.descripcion}
      </p>
      {/* Link */}
      <span
        className="font-[family-name:var(--font-space-mono)] flex items-center transition-all duration-200"
        style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--teal-300)', gap: '8px' }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
        onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
      >
        Ver proyecto
        <span aria-hidden="true">→</span>
      </span>
    </>
  )

  return (
    <motion.a
      href={proyecto.href}
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`
        relative overflow-hidden block cursor-pointer no-underline group
        ${wide ? 'col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-[1fr_1fr] items-center' : ''}
      `}
      style={{
        padding: '40px',
        border: '1px solid rgba(94,207,184,0.12)',
        background: 'rgba(255,255,255,0.03)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        gap: wide ? '32px' : '0',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(94,207,184,0.35)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(26,175,168,0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(94,207,184,0.12)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(94,207,184,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {wide ? (
        <>
          <div className="relative z-10">{cardContent}</div>
          {/* Wide card visual panel */}
          <div
            className="flex items-center justify-center font-[family-name:var(--font-space-mono)] relative z-10"
            style={{
              height: '140px',
              border: '1px solid rgba(94,207,184,0.1)',
              background: 'rgba(94,207,184,0.05)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'rgba(94,207,184,0.3)',
            }}
          >
            SAAS DASHBOARD PREVIEW
          </div>
        </>
      ) : (
        <div className="relative z-10">{cardContent}</div>
      )}
    </motion.a>
  )
}

export default function Ecosistema() {

  return (
    <section
      id="ecosistema"
      className="relative overflow-hidden"
      style={{ background: 'var(--ink)', paddingTop: '112px', paddingBottom: '112px' }}
    >
      <div className="absolute inset-0 grid-overlay-dark pointer-events-none" aria-hidden="true" />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-96px', right: '-96px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(26,175,168,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="container-main relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: '64px', maxWidth: '600px' }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
            <SectionLabel dark>Ecosistema de proyectos</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] font-normal"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, color: 'var(--white)', marginBottom: '24px' }}
          >
            Seis proyectos.<br />
            <em className="italic" style={{ color: 'var(--teal-300)' }}>Un mismo propósito.</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-syne)]"
            style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}
          >
            Cada marca que construyo responde a un problema real que identifiqué desde adentro — como usuario, como profesional o como ciudadano.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '24px' }}
        >
          {PROYECTOS.map((p) => (
            <ProjectCard key={p.id} proyecto={p} wide={p.wide} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
