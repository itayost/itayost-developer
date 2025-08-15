'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Simplified gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-neon-blue/10" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Simple badge without rotation */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-black text-white border-2 border-white rounded-full mb-8 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <span className="w-3 h-3 bg-white rounded-full" />
            פתרונות דיגיטליים שמדברים בקול רם
            <span className="text-xl">🚀</span>
          </div>
          
          {/* Clean headline without glitch effect */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-display font-black mb-6 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <span className="block text-white text-shadow-brutal">
              נשבור את הכללים
            </span>
            <span className="block gradient-text-neon mt-2">
              נבנה את העתיד
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto font-medium transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            אתרים, אפליקציות ומערכות
            <span className="text-neon-yellow font-bold"> שאי אפשר להתעלם מהם</span>
            <br className="hidden md:block" />
            <span className="text-lg text-white/70">מחירים הוגנים • יחס אישי • תוצאות מטורפות</span>
          </p>
          
          {/* Bold CTAs without pulse */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <Button
              variant="glow"
              size="xl"
              className="text-xl font-black min-w-[250px]"
            >
              <span className="mr-2">🔥</span>
              בואו נתחיל משהו מטורף
            </Button>
            
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="inline-flex"
            >
              <Button
                variant="brutal"
                size="xl"
                className="text-xl font-black min-w-[250px]"
              >
                <span className="mr-2 text-2xl">📞</span>
                054-4994417
              </Button>
            </a>
          </div>
          
          {/* Static trust indicators */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl">✓</span>
              <span className="text-white font-medium">150+ פרויקטים</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl">✓</span>
              <span className="text-white font-medium">5 שנות ניסיון</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl">✓</span>
              <span className="text-white font-medium">98% שביעות רצון</span>
            </div>
          </div>
          
          {/* Alternative CTA */}
          <div 
            className={`mt-12 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '500ms' }}
          >
            <Link href="/services">
              <Button
                variant="neon"
                size="lg"
                className="font-bold"
              >
                רוצה לראות מה אנחנו יכולים לעשות? →
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Simple scroll indicator without bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}