'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function PortfolioCTASection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-black to-neon-blue relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-yellow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-8 animate-wiggle">
            🎯 הפרויקט הבא
          </div>
          
          <h2 
            className="text-display font-black text-white mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`block text-shadow-brutal transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            }`}>
              הפרויקט הבא שלנו
            </span>
            <span className="block text-7xl mt-4">
              <span className="gradient-text-neon text-glitch" data-text="יכול להיות שלך">
                יכול להיות שלך
              </span>
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 font-medium">
            בואו נבנה יחד משהו 
            <span className="text-neon-yellow font-black"> שאי אפשר להתעלם ממנו</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/contact">
              <Button
                variant="brutal"
                size="xl"
                className="font-black text-xl min-w-[300px] bg-neon-yellow hover:scale-110 hover:rotate-2 transition-all duration-300"
              >
                <span className="text-3xl mr-3">🚀</span>
                בואו נתחיל פרויקט חדש
              </Button>
            </Link>
            
            <Link href="/services">
              <Button 
                variant="glow"
                size="xl"
                pulse
                className="font-black text-xl min-w-[300px]"
              >
                <span className="text-3xl mr-3">💡</span>
                ראו את השירותים שלנו
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '⚡', text: 'התחלה תוך 48 שעות' },
              { icon: '💯', text: 'אחריות על התוצאה' },
              { icon: '🎯', text: 'ליווי אישי צמוד' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border-4 border-white/20 text-white font-bold animate-fade-up"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  transform: `rotate(${idx === 1 ? -2 : idx === 2 ? 2 : 0}deg)`
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
