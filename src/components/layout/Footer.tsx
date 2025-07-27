import Button from '@/components/ui/Button';
import { CONTACT_CTAS, NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="container">
        <div className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <h3 className="text-2xl font-bold">ItayOst</h3>
              </Link>
              <p className="text-white/80 leading-relaxed max-w-md mb-6">
                {SITE_CONFIG.description}
              </p>
              
              {/* Social proof */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70">מעל 50 לקוחות מרוצים</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70">5 שנות ניסיון</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white/90">קישורים מהירים</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-white/90">צור קשר</h4>
              <div className="space-y-3">
                <a 
                  href={CONTACT_CTAS.PHONE.href}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <span>📞</span>
                  <span dir="ltr">{SITE_CONFIG.phone}</span>
                </a>
                <a 
                  href={CONTACT_CTAS.EMAIL.href}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <span>✉️</span>
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <a 
                  href={CONTACT_CTAS.WHATSAPP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
              
              <Link href="/contact">
                <Button 
                  size="sm" 
                  className="mt-6 bg-white text-text-primary hover:bg-neutral-100"
                >
                  שלח הודעה
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/60 text-center md:text-right">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. כל הזכויות שמורות.
              </p>
              
              <p className="text-sm text-white/60 text-center md:text-left">
                עוצב ופותח עם ❤️ ותשומת לב לפרטים
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}