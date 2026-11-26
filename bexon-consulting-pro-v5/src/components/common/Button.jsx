import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  showIcon = true,
  className = '',
  type = 'button',
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryDark shadow-lg shadow-primary/25',
    dark: 'bg-darkBg text-white hover:bg-slate-800 shadow-md',
    outline:
      'border border-white/25 text-white hover:bg-white hover:text-darkBg backdrop-blur-sm',
    outlineDark:
      'border border-slate-300 text-slate-900 hover:border-primary hover:bg-primary hover:text-white',
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  )
}

export default Button
