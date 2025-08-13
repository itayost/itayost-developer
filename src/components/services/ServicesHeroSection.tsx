'use client';

import { useEffect, useState } from 'react';

export default function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [floatingPosition, setFloatingPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setFloatingPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-primary-900 to-neon-blue relative overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-float-slow" />
      
      {/* Floating geometric shapes */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 border-4 border-neon-yellow/30 rotate-45 animate-float"
        style={{ transform: `translate(${floatingPosition.x}px, ${floatingPosition.y}px) rotate(45deg)` }}
      />
      <div 
        className="absolute bottom-20 left-10 w-48 h-48 bg-neon-green/10 rounded-full blur-3xl animate-pulse-soft"
        style={{ transform: `translate(${-floatingPosition.x}px, ${-floatingPosition.y}px)` }}
      />
      
      {/* Decorative icons */}
      <div className="absolute top-10 right-10 text-8xl opacity-20 animate-rotate-slow">⚙️</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-20 animate-float">🚀</div>
      <div className="absolute top-1/2 left-20 text-6xl opacity-20 animate-wiggle">💡</div>
      <div className="absolute top-1/3 right-1/4 text-7xl opacity-20 animate-bounce">⚡</div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-diagonal opacity-5" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-neon-yellow text-black border-4 border-black shadow-brutal-lg font-black mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-10 opacity-0 -rotate-3'
            }`}
          >
            <span className="animate-pulse text-xl">⚡</span>
            פתרונות שעובדים קשה בשבילך
            <span className="animate-pulse text-xl">⚡</span>
          </div>
          
          {/* Main headline with glitch effect */}
          <h1 
            className={`text-display font-black mb-6 text-white transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            <span className="block text-shadow-brutal">שירותים שמניעים את</span>
            <span className="block text-6xl gradient-text-neon mt-2 text-glitch" data-text="העסק שלך קדימה">
              העסק שלך קדימה
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-2xl text-white/90 leading-relaxed font-medium transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            מהאתר הראשון ועד למערכת המורכבת ביותר
            <br />
            <span className="text-neon-yellow font-bold">
              אנחנו הופכים רעיונות למציאות דיגיטלית
            </span>
          </p>
          
          {/* Animated scroll indicator */}
          <div 
            className={`mt-12 inline-block transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="animate-bounce">
              <div className="text-white/50 text-sm mb-2">גלול למטה</div>
              <div className="text-3xl text-white/50">↓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}