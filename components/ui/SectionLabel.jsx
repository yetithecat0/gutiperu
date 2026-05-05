/**
 * SectionLabel — eyebrow de cada sección
 * Línea teal 32px + Space Mono uppercase 10px
 */
export default function SectionLabel({ children, dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <div
        className="w-8 h-px flex-shrink-0"
        style={{ background: dark ? 'var(--teal-500)' : 'var(--teal-500)' }}
        aria-hidden="true"
      />
      <span
        className={`
          text-[10px] tracking-[0.25em] uppercase
          font-[family-name:var(--font-space-mono)]
          ${dark ? 'text-[var(--teal-500)]' : 'text-[var(--teal-700)]'}
        `}
      >
        {children}
      </span>
    </div>
  )
}
