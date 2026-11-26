const SectionHeader = ({
  subtitle,
  title,
  description,
  align = 'center',
  lightText = false,
}) => {
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'

  return (
    <div className={`mb-14 ${alignmentClasses}`}>
      <>
        {subtitle && (
          <span
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
              lightText
                ? 'bg-white/10 text-teal-300 border border-white/15'
                : 'bg-primary/10 text-primary'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            {subtitle}
          </span>
        )}

        <h2
          className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight ${
            lightText ? 'text-white' : 'text-slate-900'
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              lightText ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {description}
          </p>
        )}
      </>
    </div>
  )
}

export default SectionHeader
