'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';

export function ContactCTASection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-float-slow" />
      
      {/* Floating emojis */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🚀</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-rotate opacity-20">💎</div>
      <div className="absolute top-1/3 right-20 text-4xl animate-wiggle opacity-20">⚡</div>
      <div className="absolute bottom-1/3 left-20 text-5xl animate-bounce opacity-20">🎯</div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 
            className="text-display font-black mb-8 text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`inline-block transition-all duration-500 ${isHovered ? 'rotate-3' : ''}`}>
              מוכנים
            </span>{' '}
            <span className={`inline-block transition-all duration-500 ${isHovered ? '-rotate-3' : ''}`}>
              להתחיל?
            </span>
            <span className="block text-6xl mt-4 gradient-text-neon animate-pulse">
              בואו נעשה משהו מטורף! 🔥
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 font-medium">
            הפרויקט הבא שלנו יכול להיות המהלך שישנה את העסק שלכם
          </p>
          
          {/* CTAs Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="group"
            >
              <div className="bg-white text-black border-4 border-black shadow-brutal p-6 transform transition-all duration-300 group-hover:shadow-brutal-xl group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="text-4xl mb-2">📞</div>
                <div className="font-black text-lg">התקשר עכשיו</div>
                <div className="text-sm font-bold text-text-secondary">054-4994417</div>
              </div>
            </a>
            
            <a
              href={CONTACT_CTAS.EMAIL.href}
              className="group"
            >
              <div className="bg-neon-yellow text-black border-4 border-black shadow-brutal p-6 transform transition-all duration-300 group-hover:shadow-brutal-xl group-hover:-translate-y-2 group-hover:-rotate-1">
                <div className="text-4xl mb-2">✉️</div>
                <div className="font-black text-lg">שלח אימייל</div>
                <div className="text-sm font-bold text-text-secondary">מענה תוך 24 שעות</div>
              </div>
            </a>
            
            <a
              href={CONTACT_CTAS.WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-neon-green text-black border-4 border-black shadow-brutal p-6 transform transition-all duration-300 group-hover:shadow-brutal-xl group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="text-4xl mb-2">💬</div>
                <div className="font-black text-lg">WhatsApp</div>
                <div className="text-sm font-bold text-text-secondary">תשובה מיידית</div>
              </div>
            </a>
          </div>
          
          {/* Alternative CTA */}
          <div className="mb-12">
            <p className="text-white/80 mb-4 text-lg">מעדיפים טופס?</p>
            <Link href="/contact">
              <Button variant="glow" size="xl" pulse className="text-xl font-black">
                מלא טופס ונחזור אליך מהר 🚀
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl">✓</span>
              <span className="font-bold">תשובה תוך 24 שעות</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl">✓</span>
              <span className="font-bold">ייעוץ ראשוני חינם</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-neon-green text-xl">✓</span>
              <span className="font-bold">ללא התחייבות</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}