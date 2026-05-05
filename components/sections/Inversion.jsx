'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { INVERSION_DATA } from '@/lib/constants'

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const inputClass = `
  w-full border
  focus:outline-none transition-colors duration-200 rounded-none
`
const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  borderColor: 'rgba(94,207,184,0.2)',
  color: 'var(--white)',
  padding: '16px 20px',
  fontSize: '14px',
  fontFamily: 'var(--font-syne)',
}

export default function Inversion() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setSending(true)
    try {
      const response = await fetch('https://formspree.io/f/mjglwqwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitted(true)
        reset()
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.')
      }
    } catch (error) {
      alert('Error de conexión. Verifica tu internet e inténtalo más tarde.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ background: 'var(--teal-900)', paddingTop: '112px', paddingBottom: '112px' }}
    >
      <div className="absolute inset-0 grid-overlay-dark pointer-events-none" aria-hidden="true" />

      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px', left: '-80px',
          width: '450px', height: '450px',
          background: 'radial-gradient(circle, rgba(26,175,168,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-60px', right: '-60px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(168,216,168,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
        aria-hidden="true"
      />

      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]" style={{ gap: '80px', alignItems: 'start' }}>

          {/* LEFT — Texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '20px' }}>
              <SectionLabel dark>Inversión</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-[family-name:var(--font-instrument-serif)] font-normal"
              style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', lineHeight: 1.08, color: 'var(--white)', marginBottom: '40px' }}
            >
              Construyo con quienes creen{' '}
              <em className="italic" style={{ color: 'var(--teal-300)' }}>en el largo plazo.</em>
            </motion.h2>

            {INVERSION_DATA.parrafos.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="font-[family-name:var(--font-syne)]"
                style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '24px' }}
              >
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeInUp} style={{ marginTop: '48px' }}>
              <p
                className="font-[family-name:var(--font-space-mono)] uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--teal-500)', marginBottom: '20px' }}
              >
                Proyectos disponibles para co-inversión
              </p>
              <ul className="list-none m-0 p-0 flex flex-col" style={{ gap: '16px' }}>
                {['DW Automatizaciones · IA & Software', 'Ikreo Perú · Sostenibilidad', 'ResCO Perú · PropTech SaaS', 'Guti Perú Studio · Audiovisual', 'ATI · Productividad Digital'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center font-[family-name:var(--font-syne)]"
                    style={{ fontSize: '14px', color: 'var(--muted)', gap: '16px' }}
                  >
                    <span style={{ width: '16px', height: '1px', background: 'var(--teal-300)' }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* RIGHT — Formulario */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.form
              variants={stagger}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Formulario de contacto"
              className="flex flex-col"
              style={{
                padding: '40px',
                border: '1px solid rgba(94,207,184,0.15)',
                background: 'rgba(255,255,255,0.03)',
                gap: '24px',
              }}
            >
                {/* Nombre */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="nombre"
                    className="block font-[family-name:var(--font-space-mono)] uppercase"
                    style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '12px' }}
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: errors.nombre ? '#FF6B6B' : 'rgba(94,207,184,0.2)' }}
                    {...register('nombre', { required: 'Campo requerido' })}
                    aria-invalid={errors.nombre ? 'true' : 'false'}
                  />
                  {errors.nombre && <p style={{ fontSize: '11px', color: '#FF6B6B', marginTop: '8px' }}>{errors.nombre.message}</p>}
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-space-mono)] uppercase"
                    style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '12px' }}
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: errors.email ? '#FF6B6B' : 'rgba(94,207,184,0.2)' }}
                    {...register('email', {
                      required: 'Campo requerido',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
                    })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && <p style={{ fontSize: '11px', color: '#FF6B6B', marginTop: '8px' }}>{errors.email.message}</p>}
                </motion.div>

                {/* Tipo de interés */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="tipo"
                    className="block font-[family-name:var(--font-space-mono)] uppercase"
                    style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '12px' }}
                  >
                    Tipo de interés *
                  </label>
                  <select
                    id="tipo"
                    className={`${inputClass} cursor-pointer`}
                    style={{ ...inputStyle, background: 'rgba(14,45,42,0.95)', borderColor: errors.tipo ? '#FF6B6B' : 'rgba(94,207,184,0.2)' }}
                    {...register('tipo', { required: 'Selecciona una opción' })}
                    aria-invalid={errors.tipo ? 'true' : 'false'}
                  >
                    <option value="">Selecciona...</option>
                    {INVERSION_DATA.tiposInteres.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.tipo && <p style={{ fontSize: '11px', color: '#FF6B6B', marginTop: '8px' }}>{errors.tipo.message}</p>}
                </motion.div>

                {/* Mensaje */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="mensaje"
                    className="block font-[family-name:var(--font-space-mono)] uppercase"
                    style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '12px' }}
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    placeholder="Cuéntame sobre tu interés..."
                    className={inputClass}
                    style={{ ...inputStyle, resize: 'vertical', borderColor: errors.mensaje ? '#FF6B6B' : 'rgba(94,207,184,0.2)' }}
                    {...register('mensaje', { required: 'Campo requerido', minLength: { value: 20, message: 'Mínimo 20 caracteres' } })}
                    aria-invalid={errors.mensaje ? 'true' : 'false'}
                  />
                  {errors.mensaje && <p style={{ fontSize: '11px', color: '#FF6B6B', marginTop: '8px' }}>{errors.mensaje.message}</p>}
                </motion.div>

                {/* Submit buttons */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row pt-4" style={{ gap: '16px' }}>
                  <button
                    type="submit"
                    id="inversion-submit"
                    disabled={sending}
                    className="flex-1 flex items-center justify-center font-[family-name:var(--font-syne)] font-bold uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      padding: '16px 24px',
                      color: 'var(--white)',
                      background: 'linear-gradient(135deg, var(--teal-500), var(--teal-700))',
                      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                      gap: '8px',
                    }}
                  >
                    <Send size={14} />
                    {sending ? 'Enviando...' : 'Quiero invertir / colaborar'}
                  </button>

                  <a
                    href="#"
                    id="inversion-resumen"
                    className="flex items-center justify-center font-[family-name:var(--font-syne)] font-semibold uppercase transition-all duration-200"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.12em',
                      padding: '16px 32px',
                      color: 'var(--teal-300)',
                      border: '1px solid rgba(94,207,184,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--teal-300)'
                      e.currentTarget.style.background = 'rgba(94,207,184,0.06)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(94,207,184,0.3)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    Resumen ejecutivo →
                  </a>
                </motion.div>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 pt-2"
                    style={{ color: 'var(--teal-300)' }}
                  >
                    <CheckCircle size={18} />
                    <span className="font-[family-name:var(--font-syne)] text-sm">
                      ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
                    </span>
                  </motion.div>
                )}
              </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
