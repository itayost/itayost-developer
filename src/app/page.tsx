import { generateSEO } from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CONTACT_CTAS, SERVICES, SITE_CONFIG, VALUE_PROPS } from '@/lib/constants';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'ItayOst - פתרונות דיגיטליים לעסקים | אתרים, אפליקציות ומערכות',
  description: 'פתרונות דיגיטליים מתקדמים לעסקים קטנים ובינוניים. פיתוח אתרים, אפליקציות ומערכות ניהול במחירים הוגנים ויחס אישי.',
  keywords: ['פיתוח אתרים', 'אפליקציות עסקיות', 'מערכות ניהול', 'אתרים לעסקים', 'פתרונות דיגיטליים'],
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Clean & Modern */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-white opacity-50" />
        <div className="absolute inset-0 pattern-dots opacity-[0.02]" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Small accent badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft" />
              פתרונות דיגיטליים מתקדמים
            </div>
            
            {/* Main headline - Clean typography */}
            <h1 className="text-display md:text-7xl lg:text-display font-bold tracking-micro mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <span className="text-text-primary">נבנה את העתיד</span>
              <br />
              <span className="gradient-text">הדיגיטלי של העסק שלך</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              אתרים, אפליקציות ומערכות חכמות המותאמות בדיוק לצרכים שלך.
              <br className="hidden md:block" />
              מחירים הוגנים, יחס אישי ותוצאות מרשימות.
            </p>
            
            {/* CTAs - Refined buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="btn-primary text-lg px-8 shadow-soft-md hover-lift"
                >
                  התחל פרויקט חדש
                </Button>
              </Link>
              <a
                href={CONTACT_CTAS.PHONE.href}
                className="btn-outline text-lg hover-lift"
              >
                <span className="ml-2">📞</span>
                {SITE_CONFIG.phone}
              </a>
            </div>
            
            {/* Trust indicators - Subtle */}
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-text-tertiary animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ללא עלויות נסתרות</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>תמיכה מלאה</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>משלוח מהיר</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section - Clean Grid */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-title md:text-headline font-bold tracking-micro mb-4">
              שירותים המותאמים לעסק שלך
            </h2>
            <p className="text-lg text-text-secondary">
              פתרונות מקצועיים שעוזרים לעסק שלך לצמוח ולהתייעל בעידן הדיגיטלי
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(SERVICES).map((service, index) => (
              <Card 
                key={service.id}
                className="card-premium group hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-elegant flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-center mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services#${service.id}`}
                    className="flex items-center justify-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    למד עוד
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Minimal */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-title md:text-headline font-bold tracking-micro mb-8">
                למה לבחור ב-ItayOst?
              </h2>
              <div className="space-y-6">
                {Object.values(VALUE_PROPS).map((prop, index) => (
                  <div 
                    key={prop.title}
                    className="flex gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl">
                      {prop.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {prop.title}
                      </h3>
                      <p className="text-text-secondary">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Placeholder for image/graphic */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-elegant shadow-soft-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 opacity-20">🏆</div>
                    <p className="text-text-tertiary">תמונה / גרפיקה</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Elegant */}
      <section className="section bg-text-primary text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge badge-neutral bg-white/10 text-white/80 mb-6">
                  פרויקט לדוגמה
                </div>
                <h2 className="text-title md:text-headline font-bold tracking-micro mb-6">
                  אקדמיה למספרות
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  פיתוח אתר מודרני ומערכת CRM משולבת לניהול סטודנטים ותהליכי רישום
                </p>
                
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div>
                    <div className="text-3xl font-bold mb-1">+150%</div>
                    <p className="text-white/60 text-sm">גידול ברישומים</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">70%</div>
                    <p className="text-white/60 text-sm">חיסכון בזמן ניהול</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <p className="text-white/60 text-sm">שביעות רצון</p>
                  </div>
                </div>
                
                <Link href="/portfolio">
                  <Button 
                    variant="secondary"
                    className="bg-white text-text-primary hover:bg-neutral-100"
                  >
                    ראה עוד פרויקטים
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                {/* Elegant mockup placeholder */}
                <div className="bg-white/10 backdrop-blur-sm rounded-elegant p-8 border border-white/20">
                  <div className="bg-white/5 rounded-smooth h-64 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/10 rounded w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-title md:text-headline font-bold tracking-micro mb-4">
              תהליך עבודה שקוף ומסודר
            </h2>
            <p className="text-lg text-text-secondary">
              מהרעיון הראשוני ועד להשקה המוצלחת - איתך בכל שלב
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute right-8 top-0 bottom-0 w-[2px] bg-neutral-200 hidden md:block"></div>
              
              {/* Timeline items */}
              {[
                { title: 'פגישת ייעוץ', desc: 'הבנת הצרכים והגדרת היעדים', icon: '💡' },
                { title: 'תכנון ואסטרטגיה', desc: 'בניית תוכנית עבודה מפורטת', icon: '📋' },
                { title: 'עיצוב ופיתוח', desc: 'יצירת הפתרון עם עדכונים שוטפים', icon: '🎨' },
                { title: 'בדיקות והשקה', desc: 'הבטחת איכות ועלייה לאוויר', icon: '🚀' },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="relative flex items-center gap-8 mb-12 last:mb-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-soft-md flex items-center justify-center text-2xl z-10 relative">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-background-secondary rounded-elegant p-6">
                    <h3 className="font-semibold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-secondary">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-title md:text-headline font-bold tracking-micro mb-6">
              מוכנים להתחיל?
            </h2>
            
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              בואו נפגש לשיחת ייעוץ ללא התחייבות ונבנה יחד את הפתרון המושלם לעסק שלך
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_CTAS.PHONE.href}
                className="btn-primary text-lg px-8 py-4 shadow-soft-lg hover-lift"
              >
                <span className="ml-2">📞</span>
                התקשר עכשיו
              </a>
              
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-lg hover-lift"
                >
                  שלח הודעה
                </Button>
              </Link>
            </div>
            
            <p className="mt-8 text-text-tertiary">
              או שלח לנו WhatsApp -{' '}
              <a
                href={CONTACT_CTAS.WHATSAPP.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-success font-medium hover:underline"
              >
                {SITE_CONFIG.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}