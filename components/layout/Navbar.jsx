'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll for enhanced backdrop
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(94,207,184,0.2)]"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '32px',
          paddingLeft: '48px',
          paddingRight: '48px',
          paddingTop: '20px',
          paddingBottom: '20px',
          minHeight: '72px',
          background: scrolled
            ? 'rgba(248,253,251,0.97)'
            : 'rgba(248,253,251,0.85)',
          boxShadow: scrolled ? '0 4px 24px rgba(26,175,168,0.06)' : 'none',
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo — columna izquierda */}
        <a
          href="/"
          id="nav-logo"
          className="font-[family-name:var(--font-space-mono)] font-bold no-underline transition-opacity hover:opacity-75"
          style={{
            fontSize: '16px',
            letterSpacing: '0.1em',
            color: 'var(--teal-700)',
            whiteSpace: 'nowrap',
          }}
        >
          GUTI<span style={{ color: 'var(--teal-500)' }}>PERÚ</span>.COM
        </a>

        {/* Desktop links — columna central */}
        <ul className="hidden lg:flex items-center justify-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-[family-name:var(--font-syne)] tracking-[0.12em] uppercase no-underline transition-colors duration-200"
                style={{ fontSize: '11px', color: 'var(--muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--teal-500)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile hamburger — columna derecha */}
        <div className="flex items-center justify-end gap-4">
          <a
            href="#contacto"
            id="nav-cta-invertir"
            className="hidden lg:inline-flex items-center justify-center font-[family-name:var(--font-space-mono)] font-bold tracking-[0.12em] uppercase cursor-pointer transition-all duration-200"
            style={{
              fontSize: '11px',
              padding: '11px 24px',
              background: 'var(--teal-500)',
              color: 'white',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--teal-700)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--teal-500)')}
          >
            Invertir
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            style={{ color: 'var(--teal-700)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            id="nav-hamburger"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[rgba(10,31,30,0.5)]"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer panel */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-[280px]
          bg-[var(--white)] border-l border-[rgba(94,207,184,0.2)]
          flex flex-col pt-20 pb-10 px-8
          transition-transform duration-300 ease-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* Close button inside drawer */}
        <button
          className="absolute top-5 right-5 text-[var(--teal-700)]"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={22} />
        </button>

        {/* Mobile nav links */}
        <ul className="list-none m-0 p-0 flex flex-col gap-1 mb-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="
                  block py-3
                  text-[13px] tracking-[0.12em] uppercase no-underline
                  text-[var(--ink)] font-[family-name:var(--font-syne)] font-semibold
                  border-b border-[rgba(94,207,184,0.1)]
                  transition-colors duration-200 hover:text-[var(--teal-500)]
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <a
          href="#contacto"
          onClick={handleNavClick}
          className="
            flex items-center justify-center
            font-[family-name:var(--font-space-mono)] text-[11px] font-bold
            tracking-[0.12em] uppercase
            px-6 py-4
            bg-[var(--teal-500)] text-white
            transition-all duration-200
            hover:bg-[var(--teal-700)]
          "
          style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
        >
          Invertir
        </a>
      </div>
    </>
  )
}
