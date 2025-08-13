'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesCTASection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-black to-neon-blue relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Static badge */}
          <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-8">
            🤔 עדיין מתלבטים?
          </div>
          
          <h2 className="text-display font-black text-white mb-6">
            <span className="block text-shadow-brutal">בואו נמצא יחד</span>
            <span className="gradient-text-neon">
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
                  isHovered ? 'shadow-brutal-xl -translate-y-1' : ''
                }`}
              >
                <span className="mr-2 text-2xl">📞</span>
                דברו איתי עכשיו
              </Button>
            </a>
            
            <Link href="/contact">
              <Button
                variant="glow"
                size="xl"
                className="font-black text-xl min-w-[280px]"
              >
                <span className="mr-2">✉️</span>
                שלחו הודעה
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-neon-green">✓</span>
              <span>ייעוץ ראשוני חינם</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-neon-green">✓</span>
              <span>מחירים הוגנים</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-neon-green">✓</span>
              <span>ללא התחייבות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}