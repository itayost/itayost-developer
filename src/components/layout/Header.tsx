'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS, NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-soft' 
          : 'bg-white'
      }`}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Clean and modern */}
          <Link 
            href="/" 
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <span className="text-2xl font-bold text-text-primary">
              ItayOst
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <span className="text-lg" dir="ltr">{SITE_CONFIG.phone}</span>
            </a>
            <Link href="/contact">
              <Button size="sm" className="btn-primary">
                התחל פרויקט
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="תפריט"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-text-primary h-[2px] w-6 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[3px]' : '-translate-y-[6px]'
              }`} />
              <span className={`bg-text-primary h-[2px] w-6 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`bg-text-primary h-[2px] w-6 rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[3px]' : 'translate-y-[6px]'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Clean slide */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-100 py-6">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-neutral-100">
                <a
                  href={CONTACT_CTAS.PHONE.href}
                  className="flex items-center gap-3 text-text-secondary px-4"
                >
                  <span>📞</span>
                  <span dir="ltr">{SITE_CONFIG.phone}</span>
                </a>
                <div className="px-4">
                  <Link href="/contact">
                    <Button fullWidth className="btn-primary">
                      התחל פרויקט
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}