'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StatusPill from '@/components/ui/StatusPill'
import Tag from '@/components/ui/Tag'
import { HERO_DATA } from '@/lib/constants'

// Framer Motion variants
const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(160deg, var(--white) 0%, var(--off) 40%, var(--teal-100) 100%)' }}
    >
      {/* ── Organic blobs ── */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(94,207,184,0.18) 0%, transparent 70%)',
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          animation: 'morph1 12s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[5%] -left-[8%] w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(168,216,168,0.15) 0%, transparent 70%)',
          borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
          animation: 'morph2 15s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[30%] left-[35%] w-[300px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(126,234,234,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'morph1 10s ease-in-out infinite reverse',
        }}
        aria-hidden="true"
      />

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" aria-hidden="true" />

      {/* ── Main content ── */}
      <div
        className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_460px] items-center min-h-screen"
        style={{
          gap: '64px',
          paddingTop: '108px',   /* 72px navbar + 36px breathing room */
          paddingBottom: '80px',
        }}
      >
        {/* LEFT — Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {/* Status pill */}
          <motion.div variants={fadeInUp} style={{ marginBottom: '28px' }}>
            <StatusPill>{HERO_DATA.statusPill}</StatusPill>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            className="font-[family-name:var(--font-space-mono)] tracking-[0.2em] uppercase"
            style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '18px' }}
          >
            {HERO_DATA.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] font-normal"
            style={{
              fontSize: 'clamp(52px, 6.5vw, 92px)',
              lineHeight: 1.0,
              color: 'var(--ink)',
              marginBottom: '32px',
            }}
          >
            Construyo<br />
            el{' '}
            <em className="italic" style={{ color: 'var(--teal-500)', position: 'relative' }}>
              futuro
              <span
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, var(--teal-300), var(--cyan))',
                }}
                aria-hidden="true"
              />
            </em>
            <br />
            desde hoy.
          </motion.h1>

          {/* Statement */}
          <motion.blockquote
            variants={fadeInUp}
            className="font-[family-name:var(--font-instrument-serif)] italic"
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: '#3A6B68',
              maxWidth: '500px',
              marginBottom: '40px',
              paddingLeft: '20px',
              borderLeft: '2px solid var(--teal-300)',
            }}
          >
            {HERO_DATA.statement}
          </motion.blockquote>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            <a
              href="#origen"
              id="hero-cta-historia"
              className="inline-flex items-center font-[family-name:var(--font-syne)] font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontSize: '12px',
                padding: '16px 32px',
                color: 'white',
                background: 'linear-gradient(135deg, var(--teal-500), var(--teal-700))',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                boxShadow: '0 4px 20px rgba(26,175,168,0.2)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,175,168,0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,175,168,0.2)')}
            >
              {HERO_DATA.ctas.primary}
            </a>
            <a
              href="#contacto"
              id="hero-cta-inversion"
              className="inline-flex items-center font-[family-name:var(--font-syne)] font-semibold tracking-[0.14em] uppercase transition-all duration-200 active:scale-[0.98]"
              style={{
                fontSize: '12px',
                padding: '16px 32px',
                color: 'var(--teal-700)',
                border: '1.5px solid var(--teal-300)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(94,207,184,0.1)'
                e.currentTarget.style.borderColor = 'var(--teal-500)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'var(--teal-300)'
              }}
            >
              {HERO_DATA.ctas.secondary}
            </a>
          </motion.div>

          {/* Tags */}
          <motion.div variants={stagger} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {HERO_DATA.tags.map((tag) => (
              <motion.div key={tag} variants={fadeInUp}>
                <Tag>{tag}</Tag>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Visual card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Floating leaf decorations */}
          <div
            className="absolute -top-8 -right-8 w-28 h-28 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 40%, var(--leaf), rgba(90,138,90,0.3))',
              borderRadius: '0% 100% 0% 100% / 100% 0% 100% 0%',
              opacity: 0.35,
              animation: 'float1 8s ease-in-out infinite',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-5 -left-10 w-20 h-20 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, var(--teal-300), rgba(94,207,184,0.2))',
              borderRadius: '100% 0% 100% 0% / 0% 100% 0% 100%',
              opacity: 0.3,
              animation: 'float1 10s ease-in-out infinite reverse',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-[40%] -right-12 w-16 h-16 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, var(--sun), rgba(232,212,106,0.2))',
              borderRadius: '50% 0% 50% 0% / 0% 50% 0% 50%',
              opacity: 0.4,
              animation: 'float2 7s ease-in-out infinite',
            }}
            aria-hidden="true"
          />

          {/* Browser-frame card */}
          <div
            className="bg-white relative overflow-hidden"
            style={{
              border: '1px solid rgba(94,207,184,0.3)',
              boxShadow: 'var(--shadow-hero)',
            }}
          >
            {/* Rainbow top stripe */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: 'linear-gradient(90deg, var(--teal-300), var(--cyan), var(--leaf), var(--sun))' }}
              aria-hidden="true"
            />

            {/* Card header — browser bar */}
            <div
              className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(94,207,184,0.15)]"
              style={{ background: 'rgba(248,253,251,0.8)' }}
            >
              {/* Traffic light dots */}
              <div className="flex gap-[5px]" aria-hidden="true">
                <div className="w-[9px] h-[9px] rounded-full bg-[#FF6B6B]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[var(--sun)]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[var(--leaf)]" />
              </div>
              <div
                className="
                  flex-1 font-[family-name:var(--font-space-mono)] text-[10px]
                  text-[var(--muted)] px-3 py-1 text-center rounded-[20px]
                  bg-[rgba(26,175,168,0.06)] border border-[rgba(26,175,168,0.15)]
                "
              >
                gutiperu.com
              </div>
            </div>

            {/* Card body */}
            <div className="p-8">
              {/* Photo */}
              <div
                className="relative overflow-hidden mb-8 border border-[rgba(94,207,184,0.2)] bg-[var(--off)]"
                style={{ aspectRatio: '4/5' }}
              >
                <Image
                  src="/images/hero/arturo-caccha.jpg"
                  alt="Lic. Adm. Luis Arturo Caccha Gutiérrez"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
                {/* Scan line animation */}
                <div
                  className="absolute left-0 right-0 h-[2px] pointer-events-none z-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--teal-300), transparent)',
                    animation: 'scan 4s linear infinite',
                    top: '-5%',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {HERO_DATA.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="px-6 py-5 border border-[rgba(26,175,168,0.12)] flex flex-col justify-center items-center text-center"
                    style={{ background: 'rgba(26,175,168,0.05)', minHeight: '80px' }}
                  >
                    <span
                      className="
                        block font-[family-name:var(--font-space-mono)]
                        text-[22px] font-bold text-[var(--teal-500)]
                      "
                    >
                      {m.value}
                    </span>
                    <span
                      className="
                        block text-[10px] tracking-[0.1em] uppercase
                        text-[var(--muted)] mt-1
                        font-[family-name:var(--font-space-mono)]
                      "
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div
          className="w-5 h-[30px] border-[1.5px] border-[var(--teal-300)] rounded-[10px] relative"
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1 h-2 bg-[var(--teal-500)] rounded-full"
            style={{ top: '5px', animation: 'scrolldown 2s ease-in-out infinite' }}
          />
        </div>
        <span
          className="font-[family-name:var(--font-space-mono)] text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]"
        >
          Explorar
        </span>
      </div>
    </section>
  )
}
