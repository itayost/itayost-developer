import { generateSEO } from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'תיק עבודות | ItayOst - פרויקטים מוצלחים',
  description: 'צפו בפרויקטים המוצלחים שלנו - אתרים, אפליקציות ומערכות שפיתחנו עבור לקוחות מרוצים.',
  keywords: ['תיק עבודות', 'פרויקטים', 'דוגמאות', 'הצלחות', 'לקוחות'],
});

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-background-secondary to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft" />
              פרויקטים מוצלחים
            </div>
            
            <h1 className="text-display md:text-headline font-bold tracking-micro mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              עבודות שאנחנו 
              <span className="gradient-text"> גאים בהן</span>
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              כל פרויקט מספר סיפור של שינוי, חדשנות והצלחה עסקית
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project - Barbershop Academy */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Featured Badge */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                <span>⭐</span>
                פרויקט מומלץ
              </span>
            </div>
            
            {/* Project Content */}
            <Card className="shadow-premium overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative bg-gradient-to-br from-primary-50 to-accent-50 p-8 lg:p-12">
                  <div className="aspect-video bg-white rounded-smooth shadow-soft-lg flex items-center justify-center">
                    <span className="text-6xl opacity-20">✂️</span>
                  </div>
                  {/* Project type badge */}
                  <div className="absolute top-8 right-8">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-soft">
                      אתר + CRM
                    </span>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold mb-4">אקדמיה למספרות</h2>
                  <p className="text-lg text-text-secondary mb-6">
                    פיתוח אתר מודרני ומערכת CRM מקיפה לניהול אקדמיה מקצועית למספרות. 
                    הפתרון כולל רישום אונליין, ניהול סטודנטים, מעקב התקדמות וממשק ניהול מתקדם.
                  </p>
                  
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-accent-600 mb-2">האתגר</h3>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-500 mt-0.5">•</span>
                          <span>ניהול ידני של מאות סטודנטים</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-500 mt-0.5">•</span>
                          <span>חוסר בנוכחות דיגיטלית</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-500 mt-0.5">•</span>
                          <span>קושי במעקב אחר התקדמות</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary-600 mb-2">הפתרון</h3>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-0.5">✓</span>
                          <span>מערכת CRM מותאמת אישית</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-0.5">✓</span>
                          <span>אתר רספונסיבי עם רישום אונליין</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-0.5">✓</span>
                          <span>דשבורד מנהלים בזמן אמת</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="bg-background-secondary rounded-smooth p-6 mb-8">
                    <h3 className="font-semibold mb-4">התוצאות</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">+150%</div>
                        <p className="text-sm text-text-tertiary">גידול ברישומים</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">70%</div>
                        <p className="text-sm text-text-tertiary">חיסכון בזמן</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">100%</div>
                        <p className="text-sm text-text-tertiary">שביעות רצון</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-tertiary mb-3">טכנולוגיות</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-neutral-100 text-text-secondary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Testimonial */}
                  <blockquote className="border-r-4 border-primary-500 pr-4 mb-6">
                    <p className="text-text-secondary italic mb-2">
                      "המערכת שינתה לנו את החיים. היום אנחנו מנהלים הכל במקום אחד 
                      וחוסכים שעות של עבודה כל יום"
                    </p>
                    <footer className="text-sm text-text-tertiary">
                      — יוסי כהן, מנהל האקדמיה
                    </footer>
                  </blockquote>
                  
                  <Button className="btn-primary">
                    רוצה תוצאות דומות? בואו נדבר
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              עוד פרויקטים נבחרים
            </h2>
            <p className="text-lg text-text-secondary">
              מגוון פתרונות דיגיטליים לעסקים מכל הסוגים
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="card-premium overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-20">{project.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-soft">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                {/* Project Info */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-text-tertiary mb-2">נקודות מרכזיות</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="text-primary-500">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Results */}
                  {project.results && (
                    <div className="pt-4 border-t border-neutral-100">
                      <p className="text-sm font-medium text-success">
                        {project.results}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-title font-bold tracking-micro mb-4">
                מה הלקוחות אומרים
              </h2>
              <p className="text-lg text-text-secondary">
                ביקורות אמיתיות מלקוחות מרוצים
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="card-premium animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    
                    <blockquote className="mb-6">
                      <p className="text-text-secondary leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-text-tertiary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-title font-bold tracking-micro mb-6">
              הפרויקט הבא שלנו יכול להיות שלך
            </h2>
            <p className="text-xl text-text-secondary mb-10">
              בואו נבנה יחד משהו מדהים שיקדם את העסק שלכם
            </p>
            
            <Link href="/contact">
              <Button size="lg" className="btn-primary shadow-soft-lg hover-lift">
                התחל פרויקט חדש
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const projects = [
  {
    title: 'חנות אופנה אונליין',
    type: 'E-Commerce',
    icon: '👗',
    description: 'פלטפורמת מסחר אלקטרוני מלאה עם ניהול מלאי ותשלומים',
    features: [
      'עיצוב מותאם מותג',
      'סליקת אשראי מאובטחת',
      'ניהול מלאי אוטומטי',
    ],
    results: '40% גידול במכירות תוך 3 חודשים',
  },
  {
    title: 'מערכת ניהול למסעדה',
    type: 'Business System',
    icon: '🍕',
    description: 'מערכת מקיפה לניהול הזמנות, משלוחים ועובדים',
    features: [
      'ניהול תפריט דינמי',
      'מערכת משלוחים',
      'ניהול משמרות',
    ],
    results: '60% חיסכון בזמן ניהול',
  },
  {
    title: 'אפליקציית כושר',
    type: 'Mobile App',
    icon: '💪',
    description: 'אפליקציה לאימונים אישיים עם מעקב התקדמות',
    features: [
      'תוכניות אימון מותאמות',
      'מעקב ביצועים',
      'קהילת משתמשים',
    ],
    results: '1000+ הורדות בחודש הראשון',
  },
  {
    title: 'פורטל ארגוני',
    type: 'Web Portal',
    icon: '🏢',
    description: 'פורטל פנים ארגוני לניהול משאבי אנוש ותקשורת',
    features: [
      'ניהול עובדים',
      'לוח מודעות',
      'מערכת דיווחים',
    ],
  },
  {
    title: 'אתר תדמית לעורך דין',
    type: 'Corporate Site',
    icon: '⚖️',
    description: 'אתר מקצועי ואמין להצגת שירותים משפטיים',
    features: [
      'עיצוב יוקרתי',
      'מערכת פניות',
      'בלוג מקצועי',
    ],
  },
  {
    title: 'מערכת CRM לסוכנות',
    type: 'CRM System',
    icon: '📊',
    description: 'מערכת לניהול לקוחות ומעקב אחר עסקאות',
    features: [
      'ניהול לידים',
      'אוטומציית תהליכים',
      'דוחות מתקדמים',
    ],
    results: '80% שיפור במעקב אחר לקוחות',
  },
];

const testimonials = [
  {
    text: 'איתי הבין בדיוק מה אנחנו צריכים והעביר פתרון מושלם. המערכת חסכה לנו המון זמן וכסף.',
    name: 'רונית לוי',
    role: 'מנכ"לית חברת שיווק',
    avatar: '👩',
  },
  {
    text: 'השירות היה מעולה מההתחלה ועד הסוף. תמיכה מהירה, מחירים הוגנים ותוצאה מרשימה.',
    name: 'דני כהן',
    role: 'בעל מסעדה',
    avatar: '👨',
  },
  {
    text: 'האתר החדש הביא לנו יותר לקוחות ממה שציפינו. ההשקעה החזירה את עצמה תוך חודשיים.',
    name: 'מיכל ברק',
    role: 'בעלת חנות אופנה',
    avatar: '👩',
  },
  {
    text: 'מקצועיות ברמה הגבוהה ביותר. איתי ליווה אותנו לאורך כל הדרך והתוצאה מדברת בעד עצמה.',
    name: 'אבי שמש',
    role: 'מנהל סטארטאפ',
    avatar: '👨',
  },
];