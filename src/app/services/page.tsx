import { generateSEO } from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'השירותים שלנו | ItayOst - פיתוח אתרים, אפליקציות ומערכות',
  description: 'שירותי פיתוח דיגיטלי מקצועיים - אתרים מודרניים, אפליקציות מותאמות אישית ומערכות ניהול חכמות לעסקים.',
  keywords: ['פיתוח אתרים', 'אפליקציות מובייל', 'מערכות ניהול', 'CRM', 'אוטומציה עסקית'],
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-background-secondary to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft" />
              פתרונות מותאמים אישית
            </div>
            
            <h1 className="text-display md:text-headline font-bold tracking-micro mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              שירותים שמניעים את 
              <span className="gradient-text"> העסק שלך קדימה</span>
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              מהאתר הראשון ועד למערכת המורכבת ביותר - אנחנו כאן כדי להפוך את החזון שלך למציאות דיגיטלית
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          {/* Web Development */}
          <div id="websites" className="mb-24 scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="badge badge-primary mb-4">השירות הפופולרי ביותר</div>
                <h2 className="text-title font-bold tracking-micro mb-6">
                  פיתוח אתרים מודרניים
                </h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  אתרים שלא רק נראים טוב, אלא גם עובדים בצורה מושלמת. 
                  כל אתר נבנה עם טכנולוגיות מתקדמות, מותאם למובייל ומאופטם למנועי חיפוש.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'עיצוב רספונסיבי מותאם לכל מכשיר',
                    'מהירות טעינה מרשימה',
                    'אופטימיזציה למנועי חיפוש (SEO)',
                    'ממשק ניהול תוכן ידידותי',
                    'אבטחה ברמה הגבוהה ביותר',
                    'תמיכה בעברית מלאה (RTL)',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="btn-primary">קבל הצעת מחיר</Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button variant="outline">ראה דוגמאות</Button>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-elegant p-8 shadow-soft-lg">
                  <div className="aspect-video bg-white rounded-smooth shadow-inner flex items-center justify-center">
                    <span className="text-6xl opacity-20">🌐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Apps */}
          <div id="apps" className="mb-24 scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-accent-50 to-white rounded-elegant p-8 shadow-soft-lg">
                  <div className="aspect-video bg-white rounded-smooth shadow-inner flex items-center justify-center">
                    <span className="text-6xl opacity-20">📱</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-title font-bold tracking-micro mb-6">
                  אפליקציות שמשנות את המשחק
                </h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  אפליקציות מותאמות אישית לכל פלטפורמה - iOS, Android או Progressive Web Apps.
                  פתרונות שמשלבים חוויית משתמש מעולה עם ביצועים מרשימים.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-background-secondary rounded-smooth">
                    <div className="text-3xl mb-2">🍎</div>
                    <h4 className="font-semibold mb-1">iOS</h4>
                    <p className="text-sm text-text-tertiary">Swift & React Native</p>
                  </div>
                  <div className="text-center p-6 bg-background-secondary rounded-smooth">
                    <div className="text-3xl mb-2">🤖</div>
                    <h4 className="font-semibold mb-1">Android</h4>
                    <p className="text-sm text-text-tertiary">Kotlin & React Native</p>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button className="btn-primary">התחל פרויקט אפליקציה</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Business Systems */}
          <div id="systems" className="scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-title font-bold tracking-micro mb-4">
                מערכות עסקיות חכמות
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                פתרונות מותאמים אישית שחוסכים זמן, מייעלים תהליכים ומגדילים רווחים
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessSystems.map((system, index) => (
                <Card 
                  key={index}
                  className="card-premium hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl mb-4">
                      {system.icon}
                    </div>
                    <CardTitle className="text-xl">{system.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">{system.description}</p>
                    <ul className="space-y-2">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-tertiary">
                          <span className="text-primary-500 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              איך אנחנו עובדים?
            </h2>
            <p className="text-lg text-text-secondary">
              תהליך מסודר ושקוף מתחילת הפרויקט ועד ההשקה
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-full shadow-soft-md flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              חבילות ומחירים
            </h2>
            <p className="text-lg text-text-secondary">
              פתרונות גמישים המותאמים לכל תקציב
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${plan.featured ? 'shadow-premium border-primary-500' : 'shadow-soft-lg'}`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      הכי פופולרי
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary-600">
                    {plan.price}
                    <span className="text-lg text-text-tertiary font-normal"> ₪</span>
                  </div>
                  <p className="text-sm text-text-tertiary mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="block">
                    <Button 
                      fullWidth
                      variant={plan.featured ? 'primary' : 'outline'}
                      className="mt-6"
                    >
                      בחר חבילה
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center mt-8 text-text-tertiary">
            * כל המחירים כוללים מע"מ. ניתן להתאים חבילות אישיות לפי דרישה.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-text-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-title font-bold tracking-micro mb-6">
              לא בטוחים איזה שירות מתאים לכם?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              נשמח לשמוע על הפרויקט שלכם ולייעץ על הפתרון המתאים ביותר
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_CTAS.PHONE.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-smooth hover:bg-neutral-100 transition-colors"
              >
                <span className="text-xl">📞</span>
                קבל ייעוץ בטלפון
              </a>
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20"
                >
                  שלח פרטי הפרויקט
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Data
const businessSystems = [
  {
    icon: '🍽️',
    title: 'מערכות למסעדות',
    description: 'ניהול משמרות, הזמנות ומלאי במקום אחד',
    features: [
      'ניהול עובדים ומשמרות',
      'מערכת הזמנות אונליין',
      'ניהול מלאי חכם',
      'דוחות ואנליטיקה',
    ],
  },
  {
    icon: '🛍️',
    title: 'מערכות למכירות',
    description: 'CRM מותאם אישית לניהול לקוחות ומכירות',
    features: [
      'ניהול לידים ולקוחות',
      'מעקב אחר מכירות',
      'אוטומציה של תהליכים',
      'דשבורד מנהלים',
    ],
  },
  {
    icon: '📊',
    title: 'מערכות BI',
    description: 'דשבורדים ודוחות לקבלת החלטות חכמות',
    features: [
      'איסוף נתונים אוטומטי',
      'ויזואליזציה מתקדמת',
      'דוחות בזמן אמת',
      'תחזיות וטרנדים',
    ],
  },
  {
    icon: '🎓',
    title: 'מערכות לחינוך',
    description: 'ניהול סטודנטים, קורסים ותכנים',
    features: [
      'רישום וניהול תלמידים',
      'מערכת שיעורים',
      'פורטל לסטודנטים',
      'מעקב התקדמות',
    ],
  },
  {
    icon: '🏥',
    title: 'מערכות לקליניקות',
    description: 'ניהול תורים, מטופלים וטיפולים',
    features: [
      'זימון תורים אונליין',
      'תיקי מטופלים',
      'ניהול טיפולים',
      'תזכורות אוטומטיות',
    ],
  },
  {
    icon: '📦',
    title: 'ניהול מלאי',
    description: 'מעקב ובקרה על המלאי בזמן אמת',
    features: [
      'מעקב מלאי בזמן אמת',
      'התראות על חוסרים',
      'ניהול ספקים',
      'דוחות מלאי',
    ],
  },
];

const processSteps = [
  {
    icon: '💬',
    title: 'הבנת הצורך',
    description: 'פגישת ייעוץ להבנת הדרישות והיעדים',
  },
  {
    icon: '📋',
    title: 'תכנון מפורט',
    description: 'הכנת מסמך אפיון ותוכנית עבודה',
  },
  {
    icon: '🎨',
    title: 'עיצוב ופיתוח',
    description: 'בניית הפתרון עם עדכונים שוטפים',
  },
  {
    icon: '🚀',
    title: 'השקה ותמיכה',
    description: 'העלאה לאוויר והדרכה מלאה',
  },
];

const pricingPlans = [
  {
    name: 'בסיסי',
    price: '2,999',
    description: 'מתאים לעסקים קטנים',
    featured: false,
    features: [
      'אתר עד 5 עמודים',
      'עיצוב רספונסיבי',
      'טופס יצירת קשר',
      'אופטימיזציה בסיסית למנועי חיפוש',
      'אחסון ותחזוקה לשנה',
      'תמיכה באימייל',
    ],
  },
  {
    name: 'מקצועי',
    price: '5,999',
    description: 'הפתרון המומלץ לרוב העסקים',
    featured: true,
    features: [
      'אתר עד 15 עמודים',
      'עיצוב מותאם אישית',
      'מערכת ניהול תוכן מלאה',
      'אופטימיזציה מתקדמת למנועי חיפוש',
      'אינטגרציות (WhatsApp, Google)',
      'אחסון מהיר ומאובטח',
      'תמיכה טלפונית',
    ],
  },
  {
    name: 'עסקי',
    price: '9,999+',
    description: 'פתרונות מותאמים אישית',
    featured: false,
    features: [
      'אתר ללא הגבלת עמודים',
      'עיצוב ייחודי ומותאם מותג',
      'פיתוח מותאם אישית',
      'מערכות ואינטגרציות מתקדמות',
      'ביצועים מיטביים',
      'אבטחה ברמה הגבוהה ביותר',
      'תמיכת VIP 24/7',
    ],
  },
];