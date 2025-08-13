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
    }, 3000); // Slower rotation
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-dark-surface to-neon-purple/20">
      {/* Simple grid background */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      {/* Static gradient shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-neon-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Static badge */}
          <div 
            className={`inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-black border-4 border-white shadow-brutal-lg font-black mb-8 transform transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <span className="text-2xl">⭐</span>
            פרויקטים שעושים רעש
            <span className="text-2xl">⭐</span>
          </div>
          
          {/* Clean headline */}
          <h1 
            className={`text-display font-black mb-8 text-white transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-shadow-brutal mb-4">
              עבודות שאנחנו
            </span>
            <span className="block text-7xl">
              <span className="gradient-text-neon">
                {words[currentWord]} בהן
              </span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-2xl text-white/90 font-medium mb-12 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            פרויקטים אמיתיים, תוצאות אמיתיות, סיפורי הצלחה אמיתיים
          </p>
          
          {/* Stats bar */}
          <div 
            className={`flex flex-wrap justify-center gap-8 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            {[
              { number: '50+', label: 'אתרים' },
              { number: '30+', label: 'אפליקציות' },
              { number: '20+', label: 'מערכות' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-black text-neon-green">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}