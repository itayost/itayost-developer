'use client';

import { useEffect, useState } from 'react';

export default function AboutHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = 'הסיפור שמאחורי הקוד';
  
  useEffect(() => {
    setIsLoaded(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-dark-surface to-neon-purple/20">
      {/* Animated binary background */}
      <div className="absolute inset-0 opacity-10">
        <div className="text-xs font-mono text-neon-green leading-none">
          {Array(50).fill(null).map((_, i) => (
            <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
              {Array(100).fill(null).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Glitch lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-neon-yellow animate-glitch" />
        <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-neon-pink animate-glitch" style={{ animationDelay: '0.3s' }} />
      </div>
      
      {/* Floating icons */}
      <div className="absolute top-10 right-10 text-8xl opacity-30 animate-rotate-slow">💻</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-30 animate-float">🚀</div>
      <div className="absolute top-1/2 right-20 text-6xl opacity-30 animate-wiggle">⚡</div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <div 
            className={`inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-black border-4 border-white shadow-brutal-lg font-black mb-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100 rotate-2' : '-translate-y-10 opacity-0 -rotate-6'
            }`}
          >
            <span className="animate-pulse text-2xl">👨‍💻</span>
            מי עומד מאחורי הקסם?
          </div>
          
          {/* Typing effect headline */}
          <h1 className="text-display font-black mb-8 text-white">
            <span className="block text-shadow-brutal mb-4">
              {typingText}
              <span className="animate-blink">|</span>
            </span>
            <span 
              className={`block text-7xl gradient-text-neon transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: '1s' }}
            >
              של איתי אוסט
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-2xl text-white/90 font-medium mb-12 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '1.5s' }}
          >
            מפתח, יזם, ובעיקר
            <span className="text-neon-yellow font-black"> אוהב לבנות דברים מטורפים</span>
          </p>
          
          {/* Fun facts ticker */}
          <div 
            className={`flex justify-center gap-8 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '2s' }}
          >
            {['5+ שנות ניסיון', '200+ פרויקטים', '∞ כוסות קפה'].map((fact, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold animate-pulse"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-white/50 text-center">
          <div className="text-sm mb-2">הסיפור המלא</div>
          <div className="text-3xl">↓</div>
        </div>
      </div>
    </section>
  );
}