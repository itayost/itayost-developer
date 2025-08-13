'use client';

import { useEffect, useState } from 'react';

export default function PortfolioHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['גאים', 'מתרגשים', 'נהנים'];
  
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-dark-surface to-neon-purple/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      {/* Floating shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-neon-yellow/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float-slow" />
      
      {/* Animated emojis */}
      <div className="absolute top-20 left-20 text-8xl opacity-30 animate-rotate-slow">🎨</div>
      <div className="absolute bottom-20 right-20 text-8xl opacity-30 animate-wiggle">💻</div>
      <div className="absolute top-1/2 left-1/3 text-6xl opacity-30 animate-float">🚀</div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <div 
            className={`inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-black border-4 border-white shadow-brutal-lg font-black mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100 rotate-2' : '-translate-y-10 opacity-0 -rotate-6'
            }`}
          >
            <span className="animate-pulse text-2xl">⭐</span>
            פרויקטים שעושים רעש
            <span className="animate-pulse text-2xl">⭐</span>
          </div>
          
          {/* Dynamic headline */}
          <h1 
            className={`text-display font-black mb-8 text-white transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-shadow-brutal mb-4">
              עבודות שאנחנו
            </span>
            <span className="block text-7xl">
              <span className="gradient-text-neon text-glitch" data-text={words[currentWord]}>
                {words[currentWord]} בהן
              </span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-2xl text-white/90 font-medium mb-12 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            כל פרויקט הוא סיפור של 
            <span className="text-neon-yellow font-black"> שינוי, חדשנות והצלחה</span>
          </p>
          
          {/* Stats */}
          <div 
            className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            {[
              { number: '200+', label: 'פרויקטים' },
              { number: '98%', label: 'לקוחות מרוצים' },
              { number: '5', label: 'שנות ניסיון' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border-4 border-white/20 transform hover:scale-110 transition-all duration-300"
                style={{ transform: `rotate(${idx === 1 ? -2 : idx === 2 ? 2 : 0}deg)` }}
              >
                <div className="text-3xl font-black text-neon-green">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-white/50 text-center">
          <div className="text-sm mb-2">גלול למטה</div>
          <div className="text-3xl">↓</div>
        </div>
      </div>
    </section>
  );
}