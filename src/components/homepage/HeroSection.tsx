import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';

export default function HeroSection() {
  return (
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
          
          {/* CTAs - Multiple options for user preference */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="btn-primary text-lg px-8 py-4 shadow-soft-lg hover-lift"
            >
              <span className="ml-2">📞</span>
              בואו נתחיל
            </a>
            
            <Link href="/services">
              <Button 
                size="lg"
                variant="outline"
                className="text-lg hover-lift"
              >
                גלה את השירותים
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <span className="text-green-500">✓</span>
              <span>מעל 50 לקוחות מרוצים</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <span className="text-green-500">✓</span>
              <span>5 שנות ניסיון</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <span className="text-green-500">✓</span>
              <span>תמיכה מלאה</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}