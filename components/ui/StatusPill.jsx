/**
 * StatusPill — indicador de disponibilidad en Hero
 * Dot animado pulse + texto mono + fondo teal translúcido
 */
export default function StatusPill({ children }) {
  return (
    <div
      className="
        inline-flex items-center gap-2
        px-4 py-[6px] pl-2
        bg-[rgba(26,175,168,0.1)]
        border border-[rgba(26,175,168,0.25)]
        rounded-full
      "
    >
      {/* Animated pulse dot */}
      <span
        className="w-[7px] h-[7px] rounded-full bg-[var(--teal-500)] flex-shrink-0"
        style={{ animation: 'pulse 2.5s ease-in-out infinite' }}
        aria-hidden="true"
      />
      <span
        className="
          text-[10px] tracking-[0.1em]
          font-[family-name:var(--font-space-mono)]
          text-[var(--teal-700)]
        "
      >
        {children}
      </span>
    </div>
  )
}
