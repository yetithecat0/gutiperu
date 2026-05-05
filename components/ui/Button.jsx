'use client'

/**
 * Button — componente atómico
 * Variantes: primary | outline | ghost
 */
export default function Button({ variant = 'primary', children, onClick, href, className = '', id, type = 'button', disabled = false }) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: `
      text-xs text-white px-8 py-4
      bg-gradient-to-br from-[var(--teal-500)] to-[var(--teal-700)]
      clip-angular-lg relative overflow-hidden
      hover:shadow-[0_8px_32px_rgba(26,175,168,0.35)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
    outline: `
      text-xs text-[var(--teal-700)] px-8 py-4
      border-[1.5px] border-[var(--teal-300)]
      hover:bg-[rgba(94,207,184,0.1)] hover:border-[var(--teal-500)]
      active:scale-[0.98]
    `,
    ghost: `
      text-xs text-[var(--teal-500)] px-4 py-2
      hover:text-[var(--teal-700)]
      after:content-['→'] after:ml-2 after:transition-transform after:duration-200
      hover:after:translate-x-1
    `,
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} id={id} className={classes}>
        {variant === 'primary' ? (
          <>
            <span className="relative z-10">{children}</span>
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-gradient-to-br from-[var(--cyan)] to-[var(--teal-500)] opacity-0 hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </>
        ) : children}
      </a>
    )
  }

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={variant === 'primary' ? { clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' } : {}}
    >
      {variant === 'primary' ? (
        <>
          <span className="relative z-10">{children}</span>
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, var(--cyan), var(--teal-500))' }}
            aria-hidden="true"
          />
        </>
      ) : children}
    </button>
  )
}
