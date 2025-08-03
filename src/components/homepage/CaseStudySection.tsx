import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CaseStudySection() {
  return (
    <section className="section bg-text-primary text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium animate-fade-up">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse-soft" />
              פרויקט נבחר
            </div>
          </div>
          
          {/* Case Study Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-up">
              <h2 className="text-title font-bold tracking-micro mb-6">
                אקדמיה למספרות
                <br />
                <span className="text-white/80">מניהול ידני לאוטומציה מלאה</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-smooth flex items-center justify-center">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">האתגר</h3>
                    <p className="text-white/80">ניהול סטודנטים ורישום קורסים ידני, ללא נוכחות דיגיטלית</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-smooth flex items-center justify-center">
                    💡
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">הפתרון</h3>
                    <p className="text-white/80">אתר מודרני עם מערכת CRM מובנית לניהול מלא של האקדמיה</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-smooth flex items-center justify-center">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">התוצאה</h3>
                    <p className="text-white/80">חיסכון של 15 שעות שבועיות ועלייה של 40% בהרשמות</p>
                  </div>
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
            
            {/* Visual Placeholder */}
            <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-elegant overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 opacity-20">💻</div>
                    <p className="text-white/60">תמונת הפרויקט</p>
                  </div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-smooth shadow-soft-xl">
                <div className="text-3xl font-bold">+40%</div>
                <div className="text-sm">הרשמות</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}