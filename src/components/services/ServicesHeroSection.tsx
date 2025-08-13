'use client';

import { useEffect, useState } from 'react';

export default function ServicesHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const services = ['אתרים', 'אפליקציות', 'מערכות'];
  
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-neon-purple via-black to-neon-blue">
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-float-slow" />
      
      {/* Glitch lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-neon-green animate-glitch" />
        <div className="absolute top-2/4 left-0 right-0 h-1 bg-neon-pink animate-glitch" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-3/4 left-0 right-0 h-1 bg-neon-yellow animate-glitch" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating emojis */}
      <div className="absolute top-10 right-10 text-8xl opacity-30 animate-float">💻</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-30 animate-float-slow">📱</div>
      <div className="absolute top-1/2 right-20 text-6xl opacity-30 animate-wiggle">⚡</div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <div 
            className={`inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-black border-4 border-black shadow-brutal-lg font-black mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100 rotate-0' : '-translate-y-10 opacity-0 -rotate-6'
            }`}
          >
            <span className="animate-pulse text-2xl">🚀</span>
            פתרונות דיגיטליים ללא פשרות
          </div>
          
          {/* Dynamic headline */}
          <h1 
            className={`text-display font-black mb-8 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-white text-shadow-brutal mb-4">
              אנחנו בונים
            </span>
            <span className="block text-7xl relative">
              <span className="gradient-text-neon text-glitch" data-text={services[activeService]}>
                {services[activeService]}
              </span>
              <span className="block text-3xl text-neon-yellow mt-2">
                שעובדים קשה בשבילך
              </span>
            </span>
          </h1>
          
          {/* Stats bar */}
          <div 
            className={`flex flex-wrap justify-center gap-8 mt-12 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            {[
              { number: '200+', label: 'פרויקטים' },
              { number: '98%', label: 'שביעות רצון' },
              { number: '24/7', label: 'תמיכה' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-none transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-3xl font-black text-neon-green">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-white/50">
          <div className="text-sm mb-2">גלול למטה לשירותים</div>
          <div className="text-3xl">↓</div>
        </div>
      </div>
    </section>
  );
}