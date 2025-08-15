'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS, NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-white border-b-4 border-black shadow-brutal-lg' 
            : 'bg-white border-b-4 border-black'
        }`}
      >
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Bold and animated */}
            <Link 
              href="/" 
              className="relative group"
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
            >
              <div className={`relative transition-all duration-300 ${
                logoHover ? 'scale-110 rotate-2' : ''
              }`}>
                <span className="text-3xl font-black text-black">
                  Itay
                </span>
                <span className={`text-3xl font-black transition-all duration-300 ${
                  logoHover ? 'text-neon-purple' : 'text-black'
                }`}>
                  Ost
                </span>
                {logoHover && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green animate-gradient-shift" />
                )}
              </div>
              {/* Animated emoji */}
              <div className={`absolute -top-3 -right-3 text-xl transition-all duration-300 ${
                logoHover ? 'rotate-12 scale-125' : 'rotate-0 scale-0'
              }`}>
                ⚡
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className={`text-base font-black transition-all duration-300 ${
                      isActive 
                        ? 'text-neon-purple' 
                        : 'text-black hover:text-neon-purple'
                    }`}>
                      {item.label}
                    </span>
                    {/* Animated underline */}
                    <div className={`absolute -bottom-2 left-0 right-0 h-1 transition-all duration-300 ${
                      isActive 
                        ? 'bg-neon-purple scale-x-100' 
                        : 'bg-gradient-to-r from-neon-purple to-neon-blue scale-x-0 group-hover:scale-x-100'
                    }`} />
                    {/* Hover badge */}
                    {!isActive && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-neon-yellow text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {index === 0 && '🏠'}
                        {index === 1 && '🛠️'}
                        {index === 2 && '🎨'}
                        {index === 3 && '👨‍💻'}
                        {index === 4 && '💬'}
                      </div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex md:items-center md:gap-4">
              <a
                href={CONTACT_CTAS.PHONE.href}
                className="group relative px-4 py-2 font-black text-black transition-all duration-300 hover:text-neon-purple"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xl group-hover:animate-wiggle">📞</span>
                  <span dir="ltr">{SITE_CONFIG.phone}</span>
                </span>
                <div className="absolute inset-0 bg-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-2 scale-110" />
              </a>
              
              <Link href="/contact">
                <Button 
                  variant="brutal" 
                  size="sm" 
                  className="font-black hover:rotate-2"
                >
                  <span className="mr-2">🚀</span>
                  התחל פרויקט
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Brutal Burger */}
            <button
              className="relative md:hidden w-12 h-12 bg-neon-yellow border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-300 touch-manipulation tap-highlight no-select"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="תפריט"
              aria-expanded={isMenuOpen}
            >
              <div className="w-full h-full flex flex-col justify-center items-center gap-1">
                <span className={`block w-6 h-1 bg-black transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`block w-6 h-1 bg-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block w-6 h-1 bg-black transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Takeover */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
        isMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-neon-purple via-black to-neon-blue transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-neon-yellow border-4 border-white shadow-brutal flex items-center justify-center text-2xl font-black hover:rotate-90 transition-transform duration-300"
          >
            ✕
          </button>
          
          {/* Menu content */}
          <nav className="h-full flex flex-col justify-center items-center gap-8 p-8">
            {/* Logo */}
            <div className="mb-8">
              <span className="text-4xl font-black text-white">ItayOst</span>
              <div className="h-1 bg-gradient-to-r from-neon-yellow to-neon-green mt-2" />
            </div>
            
            {/* Navigation items */}
            {NAV_ITEMS.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group transition-all duration-300 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`text-3xl font-black transition-all duration-300 ${
                    isActive 
                      ? 'text-neon-yellow' 
                      : 'text-white hover:text-neon-yellow'
                  }`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-neon-yellow" />
                  )}
                </Link>
              );
            })}
            
            {/* Mobile CTAs */}
            <div className="mt-8 space-y-4 w-full">
              <a
                href={CONTACT_CTAS.PHONE.href}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-black border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-300"
              >
                <span className="text-2xl">📞</span>
                <span dir="ltr">{SITE_CONFIG.phone}</span>
              </a>
              
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="glow" 
                  size="lg" 
                  fullWidth 
                  pulse
                  className="font-black"
                >
                  <span className="mr-2 text-2xl">🚀</span>
                  התחל פרויקט מטורף
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
