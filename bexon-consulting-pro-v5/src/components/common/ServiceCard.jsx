import {
  TrendingUp,
  ShieldCheck,
  Cpu,
  Users,
  Globe,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Cpu,
  Users,
  Globe,
  BarChart3,
}

const ServiceCard = ({ iconName, title, description, tag, isFeatured }) => {
  const IconComponent = iconMap[iconName] || TrendingUp

  return (
    <div
      className={`service-card group relative w-[320px] sm:w-[360px] shrink-0 rounded-2xl p-8 transition-all duration-300 border hover:-translate-y-2 ${
        isFeatured
          ? 'bg-darkBg text-white border-primary/40 shadow-xl'
          : 'bg-white text-slate-900 border-slate-200/80 hover:border-primary/50 hover:shadow-xl'
      }`}
    >
      {tag && (
        <span className="absolute top-6 right-6 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {tag}
        </span>
      )}

      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
          isFeatured
            ? 'bg-primary text-white'
            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
        }`}
      >
        <IconComponent className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p
        className={`text-sm leading-relaxed mb-6 ${
          isFeatured ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {description}
      </p>

      <Link
        to="/services"
        className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
          isFeatured
            ? 'text-teal-300 hover:text-white'
            : 'text-primary hover:text-primaryDark'
        }`}
      >
        <span>Explore Service</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  )
}

export default ServiceCard
