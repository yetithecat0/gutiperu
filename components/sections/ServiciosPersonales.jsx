'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { SERVICIOS } from '@/lib/constants'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function ServiciosPersonales() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden"
      style={{ background: 'var(--teal-100)', paddingTop: '112px', paddingBottom: '112px' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-60px', left: '-60px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(94,207,184,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-40px', right: '-40px',
          width: '280px', height: '280px',
          background: 'radial-gradient(circle, rgba(168,216,168,0.3) 0%, transparent 70%)',
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
            <SectionLabel>Servicios</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] font-normal"
            style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.08, color: 'var(--ink)', marginBottom: '24px' }}
          >
            ¿En qué puedo aportarte{' '}
            <em className="italic" style={{ color: 'var(--teal-700)' }}>directamente?</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-syne)]"
            style={{ fontSize: '15px', color: '#3A6B68', lineHeight: 1.75 }}
          >
            Más allá de mis empresas, ofrezco mi experiencia de forma directa a organizaciones, instituciones y equipos que necesitan perspectiva estratégica con capacidad de ejecución real.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '24px', marginBottom: '80px' }}
        >
          {SERVICIOS.map((servicio, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden bg-white group"
              style={{
                padding: '40px',
                border: '1px solid rgba(94,207,184,0.25)',
                boxShadow: '0 4px 24px rgba(26,175,168,0.06)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--teal-500)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26,175,168,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,207,184,0.25)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(26,175,168,0.06)'
              }}
            >
              {/* Left accent line on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                style={{
                  width: '4px',
                  background: 'linear-gradient(180deg, var(--teal-300), var(--teal-500))',
                }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div style={{ fontSize: '36px', marginBottom: '24px' }} aria-hidden="true">
                {servicio.icono}
              </div>

              {/* Title */}
              <h3
                className="font-[family-name:var(--font-syne)] font-bold transition-colors duration-300"
                style={{ fontSize: '18px', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '16px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              >
                {servicio.titulo}
              </h3>

              {/* Description */}
              <p
                className="font-[family-name:var(--font-syne)]"
                style={{ fontSize: '14px', color: '#5A7A78', lineHeight: 1.75 }}
              >
                {servicio.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Credencial + CTA */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ gap: '32px' }}
        >
          <motion.div variants={fadeInUp}>
            <p
              className="font-[family-name:var(--font-space-mono)] uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--teal-700)' }}
            >
              Lic. Administración de empresas | Docente | Agile, Lean Startup & Design Thinking | Maestría Administración | Producción Audiovisual | Vibe Coding freelance
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <a
              href="#contacto"
              id="servicios-cta-agenda"
              className="inline-flex items-center font-[family-name:var(--font-syne)] font-bold uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontSize: '12px',
                letterSpacing: '0.14em',
                padding: '16px 32px',
                color: 'var(--white)',
                background: 'linear-gradient(135deg, var(--teal-500), var(--teal-700))',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                boxShadow: '0 4px 20px rgba(26,175,168,0.2)',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,175,168,0.35)'
                e.currentTarget.style.gap = '12px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,175,168,0.2)'
                e.currentTarget.style.gap = '8px'
              }}
            >
              Agenda una conversación
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
