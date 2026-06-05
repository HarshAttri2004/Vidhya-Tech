export const SITE_STATS = {
  projects: '14+',
  clients: '9+',
  years: '2+',
  services: '6',
  responseTime: '24h',
} as const;

export const SITE_STAT_CARDS = [
  {
    icon: 'PT',
    number: SITE_STATS.projects,
    label: 'Projects Delivered',
    description: 'Completed across web, mobile, and AI solutions',
  },
  {
    icon: 'CL',
    number: SITE_STATS.clients,
    label: 'Happy Clients',
    description: 'Businesses transformed and thriving',
  },
  {
    icon: 'YR',
    number: SITE_STATS.years,
    label: 'Years Experience',
    description: 'Building digital excellence since 2022',
  },
  {
    icon: 'SV',
    number: SITE_STATS.services,
    label: 'Service Lines',
    description: 'Web, AI, marketing, video, social, and automation',
  },
  {
    icon: 'RT',
    number: SITE_STATS.responseTime,
    label: 'Response Time',
    description: 'Quick communication and support guaranteed',
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'School Website',
    category: 'Web Design',
    description:
      'Modern educational platform with enrollment system and course management.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sc3xlbnwwfHwwfHx8MA%3D%3D',
    link: '/designs/mainportfolio1/index.html',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    category: 'Web Development',
    description:
      'Modern product storefront with conversion-focused pages and checkout flow.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    link: '/design/ecommerce',
  },
  {
    id: 3,
    title: 'Fitness Website Design',
    category: 'Web Design',
    description: 'Bold fitness landing page with packages and booking CTA.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    link: '/design/gym',
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'Web Development',
    description:
      'Menu, gallery, reservation, and local SEO-ready restaurant site.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    link: '/design/restaurant',
  },
] as const;

export const CERTIFICATES = [
  {
    img: '/certificates/google.png',
    title: 'Google Cloud Certified',
    subtitle: 'Cloud Associate',
  },
  {
    img: '/certificates/aws.png',
    title: 'AWS Certified',
    subtitle: 'Solutions Architect',
  },
  {
    img: '/certificates/meta.png',
    title: 'Meta Blueprint',
    subtitle: 'Digital Marketing',
  },
  {
    img: '/certificates/hubspot.png',
    title: 'HubSpot Academy',
    subtitle: 'Inbound Certification',
  },
  {
    img: '/certificates/figma.png',
    title: 'Figma Professional',
    subtitle: 'UI/UX Design',
  },
  {
    img: '/certificates/openai.png',
    title: 'OpenAI Partner',
    subtitle: 'AI Implementation',
  },
] as const;

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Harsh Kumar',
    role: 'Web Development',
    image: '/images/Happu sir.png',
    linkedin: 'https://www.linkedin.com/in/harsh-kumar-69864036a',
    description: 'Builds scalable web applications with modern technologies.',
    bgColor: 'from-blue-600 to-blue-400',
  },
  {
    id: 2,
    name: 'Harsh Vasisth',
    role: 'Web & Software Development',
    image: '/images/Harsh sir9.png',
    linkedin: 'https://www.linkedin.com/in/harsh-vashisth-9259b7268/',
    description: 'Focuses on full-stack development and software architecture.',
    bgColor: 'from-purple-600 to-purple-400',
  },
  {
    id: 3,
    name: 'Lakshya Kumar Gupta',
    role: 'UI/UX Designer',
    image: '/images/Lakshya Sir.png',
    linkedin: 'https://www.linkedin.com/in/lakshya-kumar-gupta-41a44b35b/',
    description: 'Creates clear, user-friendly product experiences.',
    bgColor: 'from-pink-600 to-pink-400',
  },
] as const;

export const CLIENT_VALUE_CARDS = [
  {
    title: 'Clear communication',
    context: 'Discovery to launch',
    text: 'We keep scope, timelines, and next steps visible so projects stay calm and organised.',
    initials: 'CC',
    avatarClass: 'bg-indigo-500',
  },
  {
    title: 'Practical design',
    context: 'Web and landing pages',
    text: 'Layouts are built to explain the offer quickly and guide visitors toward the next action.',
    initials: 'PD',
    avatarClass: 'bg-emerald-500',
  },
  {
    title: 'Reliable support',
    context: 'After launch',
    text: 'We stay available for fixes, refinements, and the small improvements that matter after go-live.',
    initials: 'RS',
    avatarClass: 'bg-purple-500',
  },
] as const;

export const TESTIMONIALS = CLIENT_VALUE_CARDS;

export const BUSINESS_TYPES = [
  'Schools and educational institutions',
  'E-commerce brands',
  'Fitness studios and coaches',
  'Restaurants and cafes',
  'Service businesses',
  'Startups and creators',
] as const;
