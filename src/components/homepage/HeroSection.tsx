'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-main">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-float-slow" />
      
      {/* Floating shapes */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float-slow"
        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-3xl animate-pulse-soft" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated badge */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-neon-yellow text-black border-4 border-black shadow-brutal font-bold mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-10 opacity-0 -rotate-3'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            <span className="w-3 h-3 bg-black rounded-full animate-pulse" />
            פתרונות דיגיטליים שמדברים בקול רם
            <span className="animate-wiggle text-xl">🚀</span>
          </div>
          
          {/* Main headline with glitch effect */}
          <h1 
            className={`text-display md:text-7xl lg:text-display font-black mb-6 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <span className="block text-white text-shadow-brutal animate-text-slide-up">
              נשבור את הכללים
            </span>
            <span 
              className="block gradient-text-neon text-glitch mt-2" 
              data-text="נבנה את העתיד"
            >
              נבנה את העתיד
            </span>
          </h1>
          
          {/* Subtitle with typewriter effect */}
          <p 
            className={`text-2xl md:text-3xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto font-medium transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            אתרים, אפליקציות ומערכות
            <span className="text-neon-yellow font-bold"> שאי אפשר להתעלם מהם</span>
            <br className="hidden md:block" />
            <span className="text-lg text-white/70">מחירים הוגנים • יחס אישי • תוצאות מטורפות</span>
          </p>
          
          {/* Bold CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            <Button
              variant="glow"
              size="xl"
              pulse
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
          
          {/* Animated trust indicators */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '500ms' }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl animate-pulse">✓</span>
              <span className="text-white font-medium">150+ פרויקטים</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl animate-pulse">✓</span>
              <span className="text-white font-medium">5 שנות ניסיון</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl animate-pulse">✓</span>
              <span className="text-white font-medium">98% שביעות רצון</span>
            </div>
          </div>
          
          {/* Alternative CTA */}
          <div 
            className={`mt-12 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
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
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-rotate-slow opacity-20">
        ⚡
      </div>
      <div className="absolute bottom-10 right-10 text-6xl animate-rotate opacity-20">
        💎
      </div>
      <div className="absolute top-1/3 right-20 text-4xl animate-float opacity-20">
        🚀
      </div>
    </section>
  );
}