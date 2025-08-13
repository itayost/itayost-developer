'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesCTASection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-black to-neon-blue relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-yellow/20 rounded-full blur-3xl animate-float-slow" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated badge */}
          <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-8 animate-wiggle">
            🤔 עדיין מתלבטים?
          </div>
          
          <h2 className="text-display font-black text-white mb-6">
            <span className="block text-shadow-brutal">בואו נמצא יחד</span>
            <span className="gradient-text-neon text-glitch" data-text="את הפתרון המושלם">
              את הפתרון המושלם
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 font-medium">
            ייעוץ חינם • ללא התחייבות • תשובה תוך 24 שעות
          </p>
          
          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href={CONTACT_CTAS.PHONE.href}>
              <Button
                variant="brutal"
                size="xl"
                className={`font-black text-xl min-w-[280px] transition-all duration-300 ${
                  isHovered ? 'scale-110 rotate-2' : ''
                }`}
              >
                <span className="text-3xl mr-3">📞</span>
                דברו איתנו עכשיו
              </Button>
            </a>
            
            <Link href="/contact">
              <Button 
                variant="glow"
                size="xl"
                pulse
                className="font-black text-xl min-w-[280px]"
              >
                <span className="text-3xl mr-3">💌</span>
                שלחו פרטים
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { icon: '⚡', text: 'מענה מהיר' },
              { icon: '💯', text: 'ללא עלות' },
              { icon: '🎯', text: 'ייעוץ מקצועי' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
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