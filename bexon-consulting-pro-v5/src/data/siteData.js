export const navLinks = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'About Us', path: '/about' },
  { id: 3, label: 'Services', path: '/services' },
  { id: 4, label: 'Projects', path: '/projects' },
  { id: 5, label: 'Contact', path: '/contact' },
]

export const clientLogos = [
  'NexaCorp',
  'Vanguard Global',
  'StratosTech',
  'Aetheris Capital',
  'Kinetix Solutions',
  'Meridian Group',
]

export const servicesData = [
  {
    id: 'srv-1',
    iconName: 'TrendingUp',
    title: 'Business Strategy & Growth',
    description:
      'Data-driven corporate roadmaps designed to scale revenue, streamline operations, and capture emerging market share.',
    tag: 'Most Popular',
    isFeatured: true,
  },
  {
    id: 'srv-2',
    iconName: 'ShieldCheck',
    title: 'Financial Risk & Advisory',
    description:
      'Comprehensive financial auditing, capital allocation strategies, and compliance frameworks for sustainable resilience.',
    tag: null,
    isFeatured: false,
  },
  {
    id: 'srv-3',
    iconName: 'Cpu',
    title: 'Digital Transformation',
    description:
      'Modernizing legacy enterprise workflows with cloud architecture, automation pipelines, and intelligent analytics.',
    tag: 'Trending',
    isFeatured: false,
  },
  {
    id: 'srv-4',
    iconName: 'Users',
    title: 'Organizational Leadership',
    description:
      'Executive coaching, talent optimization, and agile restructuring to align teams with long-term business goals.',
    tag: null,
    isFeatured: false,
  },
  {
    id: 'srv-5',
    iconName: 'Globe',
    title: 'Global Market Expansion',
    description:
      'Cross-border entry assessments, regulatory localization, and strategic partnerships for international scaling.',
    tag: null,
    isFeatured: false,
  },
  {
    id: 'srv-6',
    iconName: 'BarChart3',
    title: 'M&A Due Diligence',
    description:
      'End-to-end valuation modeling, synergy evaluation, and post-merger integration planning for high-stakes deals.',
    tag: null,
    isFeatured: false,
  },
]

export const statsData = [
  { id: 'st-1', numericValue: 98, prefix: '', suffix: '%', label: 'Client Satisfaction Rate' },
  { id: 'st-2', numericValue: 450, prefix: '', suffix: '+', label: 'Global Projects Delivered' },
  { id: 'st-3', numericValue: 18, prefix: '', suffix: '+', label: 'Years of Industry Excellence' },
  { id: 'st-4', numericValue: 2.4, prefix: '$', suffix: 'B', decimals: 1, label: 'Client Value Generated' },
]

export const projectsData = [
  {
    id: 'prj-1',
    title: 'Fintech Core Modernization',
    category: 'Digital Transformation',
    client: 'Aetheris Capital',
    result: '+42% Operational Efficiency',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'prj-2',
    title: 'APAC Supply Chain Restructuring',
    category: 'Business Strategy',
    client: 'Meridian Logistics',
    result: '$18M Annual Cost Savings',
    image:
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'prj-3',
    title: 'Enterprise Cloud & AI Governance',
    category: 'Risk & Advisory',
    client: 'StratosTech Systems',
    result: '100% Regulatory Compliance',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
  },
]

export const teamData = [
  {
    id: 'tm-1',
    name: 'Alexander Vance',
    role: 'Managing Partner & CEO',
    experience: '20+ Yrs Experience',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tm-2',
    name: 'Elena Rostova',
    role: 'Head of Financial Strategy',
    experience: '15+ Yrs Experience',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tm-3',
    name: 'Marcus Sterling',
    role: 'Director of Digital Advisory',
    experience: '14+ Yrs Experience',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tm-4',
    name: 'Sophia Chen',
    role: 'Principal M&A Consultant',
    experience: '12+ Yrs Experience',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
  },
]

export const pricingPlans = [
  {
    id: 'plan-1',
    name: 'Growth Advisory',
    monthlyPrice: 1490,
    yearlyPrice: 1190,
    description: 'Ideal for scaling mid-sized companies seeking structured strategic guidance.',
    features: [
      'Monthly Executive Strategy Session',
      'Financial Health & KPI Audit',
      'Market Competitor Benchmarking',
      'Dedicated Junior Analyst Support',
    ],
    isPopular: false,
  },
  {
    id: 'plan-2',
    name: 'Enterprise Transformation',
    monthlyPrice: 3490,
    yearlyPrice: 2890,
    description: 'Full-scale operational, financial, and digital consulting for market leaders.',
    features: [
      'Weekly Partner-Level Consulting',
      'Custom Digital & AI Roadmap',
      'M&A and Capital Raising Advisory',
      '24/7 Priority Advisory Desk',
      'Quarterly Boardroom Presentations',
    ],
    isPopular: true,
  },
  {
    id: 'plan-3',
    name: 'Global Retainer',
    monthlyPrice: 5990,
    yearlyPrice: 4990,
    description: 'Bespoke multi-region advisory team embedded directly into your leadership.',
    features: [
      'On-Site & Global Advisory Team',
      'Cross-Border Regulatory Setup',
      'Full Supply Chain Optimization',
      'Custom Risk & Compliance Suite',
    ],
    isPopular: false,
  },
]

export const testimonialsData = [
  {
    id: 'test-1',
    quote:
      'Bexon restructured our entire European expansion strategy within 90 days. Their analytical precision and executive clarity exceeded every benchmark.',
    author: 'Jonathan Mercer',
    position: 'COO, Vanguard Global',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'Working with Bexon transformed how our leadership approaches digital risk and capital allocation. Truly a world-class consulting partner.',
    author: 'Claire Beaumont',
    position: 'CFO, Aetheris Capital',
    rating: 5,
  },
]
