import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';

export default function ContactCTASection() {
  return (
    <section className="section bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-title font-bold tracking-micro mb-6 animate-fade-up">
            מוכנים להתחיל?
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
            בואו נבנה יחד את הפתרון הדיגיטלי המושלם לעסק שלכם
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium rounded-smooth hover:bg-primary-700 transition-colors shadow-soft-lg hover-lift"
            >
              <span className="text-xl">{CONTACT_CTAS.PHONE.icon}</span>
              שיחת ייעוץ חינם
            </a>
            
            <a
              href={CONTACT_CTAS.EMAIL.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-smooth hover:bg-neutral-50 transition-colors shadow-soft-md hover-lift"
            >
              <span className="text-xl">{CONTACT_CTAS.EMAIL.icon}</span>
              שלח אימייל
            </a>
            
            <a
              href={CONTACT_CTAS.WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-smooth hover:bg-green-600 transition-colors shadow-soft-md hover-lift"
            >
              <span className="text-xl">{CONTACT_CTAS.WHATSAPP.icon}</span>
              WhatsApp
            </a>
          </div>
          
          {/* Alternative Action */}
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <p className="text-text-tertiary mb-4">מעדיפים טופס?</p>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                מלא טופס יצירת קשר
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-text-tertiary animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>תשובה תוך 24 שעות</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>ייעוץ ראשוני חינם</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>ללא התחייבות</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}