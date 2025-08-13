'use client';

import { useEffect, useState } from 'react';

export default function AboutHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-dark-surface to-neon-purple/20">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Static badge */}
          <div 
            className={`inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-black border-4 border-white shadow-brutal-lg font-black mb-8 transform transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <span className="text-2xl">👨‍💻</span>
            מי עומד מאחורי הקסם?
          </div>
          
          {/* Simple headline */}
          <h1 className={`text-display font-black mb-8 text-white transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block text-shadow-brutal mb-4">
              הסיפור שמאחורי הקוד
            </span>
            <span className="block text-7xl gradient-text-neon">
              איתי אוסט
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-2xl text-white/90 font-medium max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            מפתח Full-Stack עם תשוקה אמיתית לטכנולוגיה ועיצוב
          </p>
          
          {/* Stats */}
          <div className={`flex flex-wrap justify-center gap-8 transition-all duration-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ animationDelay: '300ms' }}>
            {[
              { number: '5+', label: 'שנות ניסיון' },
              { number: '200+', label: 'פרויקטים' },
              { number: '100%', label: 'תשוקה' },
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