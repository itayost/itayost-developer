export const featuredProject = {
  title: 'אקדמיה למספרות',
  subtitle: 'מערכת ניהול מלאה לאקדמיה מקצועית',
  type: 'אתר + CRM + אוטומציה',
  icon: '✂️',
  description: 'פיתוח אתר מודרני ומערכת CRM מקיפה לניהול אקדמיה מקצועית למספרות. הפתרון כולל רישום אונליין, ניהול סטודנטים, מעקב התקדמות וממשק ניהול מתקדם.',
  features: [
    'מערכת רישום אונליין מלאה',
    'ניהול סטודנטים ומעקב התקדמות',
    'לוח זמנים דינמי לשיעורים',
    'מערכת תשלומים מובנית',
    'דשבורד ניהולי מתקדם',
    'אוטומציה של תהליכים',
  ],
  results: {
    students: '300+',
    timeSaved: '70%',
    satisfaction: '100%',
    revenue: '+40%'
  },
  technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
  testimonial: {
    text: 'המערכת שינתה לנו את החיים. היום אנחנו מנהלים הכל במקום אחד וחוסכים שעות של עבודה כל יום. ההכנסות עלו ב-40% תוך 3 חודשים!',
    author: 'יוסי כהן',
    role: 'מנהל האקדמיה',
  },
  images: {
    main: '/portfolio/barbershop-main.jpg',
    dashboard: '/portfolio/barbershop-dashboard.jpg',
    mobile: '/portfolio/barbershop-mobile.jpg',
  }
};

export const projects = [
  {
    id: 1,
    title: 'חנות אופנה אונליין',
    type: 'E-Commerce',
    icon: '👗',
    description: 'פלטפורמת מסחר אלקטרוני מלאה עם ניהול מלאי ותשלומים',
    features: [
      'עיצוב מותאם מותג',
      'סליקת אשראי מאובטחת',
      'ניהול מלאי אוטומטי',
    ],
    results: '40% גידול במכירות',
    color: 'from-neon-pink to-neon-purple',
  },
  {
    id: 2,
    title: 'מערכת ניהול למסעדה',
    type: 'Business System',
    icon: '🍕',
    description: 'מערכת מקיפה לניהול הזמנות, משלוחים ועובדים',
    features: [
      'ניהול תפריט דינמי',
      'מערכת משלוחים',
      'ניהול משמרות',
    ],
    results: '60% חיסכון בזמן',
    color: 'from-neon-yellow to-neon-green',
  },
  {
    id: 3,
    title: 'אפליקציית כושר',
    type: 'Mobile App',
    icon: '💪',
    description: 'אפליקציה לאימונים אישיים עם מעקב התקדמות',
    features: [
      'תוכניות אימון מותאמות',
      'מעקב ביצועים',
      'קהילת משתמשים',
    ],
    results: '1000+ הורדות',
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    id: 4,
    title: 'פורטל ארגוני',
    type: 'Web Portal',
    icon: '🏢',
    description: 'פורטל פנים ארגוני לניהול משאבי אנוש ותקשורת',
    features: [
      'ניהול עובדים',
      'לוח מודעות',
      'מערכת דיווחים',
    ],
    color: 'from-brutal-blue to-brutal-purple',
  },
  {
    id: 5,
    title: 'אתר תדמית לעורך דין',
    type: 'Corporate Site',
    icon: '⚖️',
    description: 'אתר מקצועי ואמין להצגת שירותים משפטיים',
    features: [
      'עיצוב יוקרתי',
      'מערכת פניות',
      'בלוג מקצועי',
    ],
    color: 'from-dark-surface to-dark-elevated',
  },
  {
    id: 6,
    title: 'מערכת CRM לסוכנות',
    type: 'CRM System',
    icon: '📊',
    description: 'מערכת לניהול לקוחות ומעקב אחר עסקאות',
    features: [
      'ניהול לידים',
      'אוטומציית תהליכים',
      'דוחות מתקדמים',
    ],
    results: '80% שיפור במעקב',
    color: 'from-neon-green to-neon-yellow',
  },
];

export const testimonials = [
  {
    id: 1,
    text: 'איתי הבין בדיוק מה אנחנו צריכים והעביר פתרון מושלם. המערכת חסכה לנו המון זמן וכסף.',
    name: 'רונית לוי',
    role: 'מנכ"לית חברת שיווק',
    avatar: '👩',
    rating: 5,
  },
  {
    id: 2,
    text: 'השירות היה מעולה מההתחלה ועד הסוף. תמיכה מהירה, מחירים הוגנים ותוצאה מרשימה.',
    name: 'דני כהן',
    role: 'בעל מסעדה',
    avatar: '👨',
    rating: 5,
  },
  {
    id: 3,
    text: 'האתר החדש הביא לנו יותר לקוחות ממה שציפינו. ההשקעה החזירה את עצמה תוך חודשיים.',
    name: 'מיכל ברק',
    role: 'בעלת חנות אופנה',
    avatar: '👩',
    rating: 5,
  },
  {
    id: 4,
    text: 'מקצועיות ברמה הגבוהה ביותר. איתי ליווה אותנו לאורך כל הדרך והתוצאה מדברת בעד עצמה.',
    name: 'אבי שמש',
    role: 'מנהל סטארטאפ',
    avatar: '👨',
    rating: 5,
  },
];