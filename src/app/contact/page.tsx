import ContactForm from '@/components/common/ContactForm';
import { generateSEO } from '@/components/common/SEO';
import { Card, CardContent } from '@/components/ui/Card';
import { CONTACT_CTAS, SITE_CONFIG } from '@/lib/constants';

export const metadata = generateSEO({
  title: 'צור קשר | ItayOst - נשמח לשמוע ממך',
  description: 'צור קשר עם ItayOst לייעוץ חינם על פתרונות דיגיטליים לעסק שלך. טלפון, אימייל או טופס יצירת קשר.',
  keywords: ['צור קשר', 'ייעוץ חינם', 'פגישה', 'הצעת מחיר'],
});

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-background-secondary to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft" />
              זמינים עבורכם
            </div>
            
            <h1 className="text-display md:text-headline font-bold tracking-micro mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              בואו נתחיל 
              <span className="gradient-text"> משהו מדהים</span>
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
              יש לכם רעיון? שאלה? צריכים ייעוץ? אנחנו כאן בשבילכם
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Contact Card */}
                <Card className="card-premium">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">דרכי יצירת קשר</h3>
                    
                    <div className="space-y-4">
                      {/* Phone */}
                      <a 
                        href={CONTACT_CTAS.PHONE.href}
                        className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                      >
                        <div className="w-12 h-12 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                          📞
                        </div>
                        <div>
                          <p className="font-medium text-text-primary group-hover:text-primary-600 transition-colors">
                            טלפון
                          </p>
                          <p className="text-text-secondary" dir="ltr">
                            {SITE_CONFIG.phone}
                          </p>
                        </div>
                      </a>
                      
                      {/* Email */}
                      <a 
                        href={CONTACT_CTAS.EMAIL.href}
                        className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                      >
                        <div className="w-12 h-12 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                          ✉️
                        </div>
                        <div>
                          <p className="font-medium text-text-primary group-hover:text-primary-600 transition-colors">
                            אימייל
                          </p>
                          <p className="text-text-secondary">
                            {SITE_CONFIG.email}
                          </p>
                        </div>
                      </a>
                      
                      {/* WhatsApp */}
                      <a 
                        href={CONTACT_CTAS.WHATSAPP.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                      >
                        <div className="w-12 h-12 bg-success/10 rounded-smooth flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-success/20 transition-colors">
                          💬
                        </div>
                        <div>
                          <p className="font-medium text-text-primary group-hover:text-success transition-colors">
                            WhatsApp
                          </p>
                          <p className="text-text-secondary">
                            זמינים גם בוואטסאפ
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Response Time Card */}
                <Card className="bg-gradient-to-br from-primary-50 to-white border-primary-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⏱️</span>
                      <h3 className="font-semibold">זמני תגובה</h3>
                    </div>
                    <p className="text-text-secondary text-sm">
                      אנחנו עונים לפניות תוך 24 שעות בימי עבודה. 
                      לנושאים דחופים - מומלץ להתקשר ישירות.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Office Hours */}
                <Card className="card-modern">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">שעות פעילות</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">ראשון - חמישי</span>
                        <span className="font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">שישי</span>
                        <span className="font-medium">9:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">שבת</span>
                        <span className="font-medium text-text-tertiary">סגור</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-title font-bold tracking-micro mb-4">
                שאלות נפוצות
              </h2>
              <p className="text-lg text-text-secondary">
                תשובות לשאלות שאנחנו שומעים הרבה
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className="card-modern hover:shadow-soft-lg transition-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-text-secondary">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-title font-bold tracking-micro mb-6">
                  איפה אנחנו נמצאים?
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  אנחנו עובדים עם לקוחות מכל הארץ. הפגישות יכולות להתקיים אצלכם במשרד, 
                  בבית קפה נעים או בשיחת וידאו - איך שנוח לכם.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-medium">מיקום</p>
                      <p className="text-text-secondary">אזור המרכז, ישראל</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <p className="font-medium">פגישות</p>
                      <p className="text-text-secondary">גמישות מלאה - אצלכם או אונליין</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <p className="font-medium">עבודה מרחוק</p>
                      <p className="text-text-secondary">מלווים פרויקטים בכל הארץ</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-elegant shadow-soft-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl opacity-20">🗺️</span>
                  <p className="text-text-tertiary mt-4">מפה אינטראקטיבית</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// FAQ Data
const faqs = [
  {
    question: 'כמה זמן לוקח לפתח אתר?',
    answer: 'זמן הפיתוח תלוי במורכבות הפרויקט. אתר תדמית בסיסי יכול להיות מוכן תוך 2-3 שבועות, בעוד שמערכת מורכבת יכולה לקחת 2-3 חודשים.',
  },
  {
    question: 'האם אתם מספקים אחסון ותחזוקה?',
    answer: 'כן, אנחנו מציעים חבילות אחסון ותחזוקה מלאות הכוללות גיבויים, עדכוני אבטחה ותמיכה טכנית שוטפת.',
  },
  {
    question: 'מה כולל התהליך?',
    answer: 'התהליך כולל פגישת ייעוץ, אפיון מפורט, עיצוב, פיתוח, בדיקות והשקה. אנחנו מלווים אתכם בכל שלב ודואגים שתהיו מעודכנים.',
  },
  {
    question: 'האם ניתן לבצע שינויים אחרי ההשקה?',
    answer: 'בהחלט! אנחנו נותנים הדרכה מלאה על מערכת הניהול, ותמיד זמינים לעדכונים ושינויים נוספים לפי הצורך.',
  },
  {
    question: 'איך מתבצע התשלום?',
    answer: 'התשלום מתבצע בשלבים - 30% מקדמה, 40% באמצע הפרויקט ו-30% בסיום. ניתן לשלם בהעברה בנקאית, צ׳ק או כרטיס אשראי.',
  },
];