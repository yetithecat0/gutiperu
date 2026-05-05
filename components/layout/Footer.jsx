'use client'

import { FOOTER_DATA } from '@/lib/constants'
import { ExternalLink } from 'lucide-react'

const SvgLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const SvgInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const SvgGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const SOCIAL_ICONS = {
  LinkedIn:  SvgLinkedin,
  Instagram: SvgInstagram,
  GitHub:    SvgGithub,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'var(--teal-900)',
        borderTop: '1px solid rgba(94,207,184,0.1)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
      role="contentinfo"
    >
      <div className="container-main relative z-10">
        {/* Top grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-12"
          style={{ gap: '64px', marginBottom: '80px' }}
        >
          {/* Brand col */}
          <div className="md:col-span-5 flex flex-col" style={{ gap: '24px' }}>
            <a
              href="/"
              className="font-[family-name:var(--font-space-mono)] font-bold no-underline hover:opacity-80 transition-opacity"
              style={{ fontSize: '18px', letterSpacing: '0.1em', color: 'var(--white)' }}
            >
              GUTI<span style={{ color: 'var(--teal-500)' }}>PERÚ</span>.COM
            </a>
            <p
              className="font-[family-name:var(--font-syne)]"
              style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '320px' }}
            >
              Tecnología, impacto y visión a largo plazo. Un ecosistema de proyectos desde Perú para el mundo.
            </p>
            {/* Socials */}
            <div className="flex items-center" style={{ gap: '16px', marginTop: '8px' }}>
              {FOOTER_DATA.redes.map((social) => {
                const Icon = SOCIAL_ICONS[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-colors duration-200"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'var(--teal-300)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--teal-500)'
                      e.currentTarget.style.color = 'var(--white)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.color = 'var(--teal-300)'
                    }}
                    aria-label={`Visitar mi perfil en ${social.label}`}
                  >
                    {Icon && <Icon />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links col */}
          <div className="md:col-span-3">
            <h4
              className="font-[family-name:var(--font-space-mono)] font-bold uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--white)', marginBottom: '24px' }}
            >
              Navegación
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col" style={{ gap: '16px' }}>
              {FOOTER_DATA.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-syne)] transition-colors duration-200 no-underline"
                    style={{ fontSize: '14px', color: 'var(--muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-300)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects col */}
          <div className="md:col-span-4">
            <h4
              className="font-[family-name:var(--font-space-mono)] font-bold uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--white)', marginBottom: '24px' }}
            >
              Ecosistema
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col" style={{ gap: '16px' }}>
              {FOOTER_DATA.proyectos.map((proj) => (
                <li key={proj.label}>
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-syne)] group flex items-center justify-between transition-colors duration-200 no-underline"
                    style={{ fontSize: '14px', color: 'var(--muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-300)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {proj.label}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--teal-500)' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(94,207,184,0.1)',
            gap: '16px',
          }}
        >
          <p
            className="font-[family-name:var(--font-space-mono)] uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--muted)' }}
          >
            © {currentYear} Luis Arturo Caccha Gutiérrez. Todos los derechos reservados.
          </p>
          <div className="flex items-center" style={{ gap: '24px' }}>
            <a
              href="#"
              className="font-[family-name:var(--font-space-mono)] uppercase transition-colors duration-200 no-underline"
              style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Políticas
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-space-mono)] uppercase transition-colors duration-200 no-underline"
              style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
