export const SITE_CONFIG = {
  name: 'ItayOst',
  description: 'פתרונות דיגיטליים מתקדמים לעסקים קטנים ובינוניים - אתרים, אפליקציות ומערכות מותאמות אישית',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  keywords: [
    'פיתוח אתרים',
    'אפליקציות',
    'מערכות ניהול',
    'ניהול משמרות',
    'ניהול מלאי',
    'אנליטיקה',
    'עסקים קטנים',
    'עסקים בינוניים',
    'פתרונות דיגיטליים',
    'אוטומציה',
    'ישראל'
  ],
  phone: '054-4994417',
  email: 'itayost1@gmail.com',
  whatsapp: '972544994417', // Without + for WhatsApp links
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'ישראל',
    addressCountry: 'IL',
  },
  social: {
    // Add your social links when ready
    // facebook: 'https://facebook.com/itayost',
    // instagram: 'https://instagram.com/itayost',
    // linkedin: 'https://linkedin.com/company/itayost',
  },
};

export const NAV_ITEMS = [
  { label: 'בית', href: '/' },
  { label: 'שירותים', href: '/services' },
  { label: 'פרויקטים', href: '/portfolio' },
  { label: 'אודות', href: '/about' },
  { label: 'צור קשר', href: '/contact' },
];

// Service categories for easy reference
export const SERVICES = {
  WEBSITES: {
    id: 'websites',
    title: 'פיתוח אתרים',
    icon: '🌐',
    description: 'אתרים מודרניים ומותאמים אישית',
  },
  APPS: {
    id: 'apps',
    title: 'אפליקציות',
    icon: '📱',
    description: 'אפליקציות לכל פלטפורמה',
  },
  SYSTEMS: {
    id: 'systems',
    title: 'מערכות עסקיות',
    icon: '⚙️',
    description: 'מערכות ניהול מותאמות לעסק שלך',
  },
};

// Value propositions
export const VALUE_PROPS = {
  PRICE: {
    title: 'מחירים טובים',
    description: 'פתרונות במחירים הוגנים לעסקים קטנים ובינוניים',
    icon: '💰',
  },
  PERSONAL: {
    title: 'יחס אישי',
    description: 'תקשורת ישירה ושירות מותאם אישית',
    icon: '🤝',
  },
  SOLUTIONS: {
    title: 'פתרונות חכמים',
    description: 'אוטומציה של תהליכים ידניים וחיסכון בזמן',
    icon: '💡',
  },
  SPEED: {
    title: 'משלוח מהיר',
    description: 'עמידה בלוחות זמנים ותוצאות מהירות',
    icon: '🚀',
  },
};

// Contact CTAs
export const CONTACT_CTAS = {
  PHONE: {
    text: 'התקשר עכשיו',
    href: `tel:${SITE_CONFIG.phone}`,
    icon: '📞',
  },
  EMAIL: {
    text: 'שלח אימייל',
    href: `mailto:${SITE_CONFIG.email}`,
    icon: '✉️',
  },
  WHATSAPP: {
    text: 'WhatsApp',
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    icon: '💬',
  },
};