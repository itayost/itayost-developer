export const SITE_CONFIG = {
  name: 'ItayOst',
  description: 'ItayOst - Your go-to solution for web development and design.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  twitterHandle: '@yourhandle',
  phone: '+972-54-4994417',
  email: 'itayost1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Tel Aviv',
    addressRegion: 'Tel Aviv',
    postalCode: '12345',
    addressCountry: 'IL',
  },
  social: {
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourpage',
    linkedin: 'https://linkedin.com/company/yourcompany',
  },
};

export const NAV_ITEMS = [
  { label: 'בית', href: '/' },
  { label: 'אודות', href: '/about' },
  { label: 'שירותים', href: '/services' },
  { label: 'צור קשר', href: '/contact' },
];