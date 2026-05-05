/**
 * Tag — etiqueta de categoría/habilidad
 * Space Mono · borde teal · fondo translúcido
 */
export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`
        inline-block
        px-3 py-[5px]
        text-[10px] tracking-[0.08em]
        font-[family-name:var(--font-space-mono)]
        text-[var(--teal-700)]
        bg-[rgba(26,175,168,0.07)]
        border border-[rgba(26,175,168,0.2)]
        rounded-[2px]
        transition-colors duration-200
        hover:border-[rgba(26,175,168,0.4)] hover:bg-[rgba(26,175,168,0.12)]
        ${className}
      `}
    >
      {children}
    </span>
  )
}
