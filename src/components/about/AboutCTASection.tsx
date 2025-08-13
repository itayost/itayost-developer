'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutCTASection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-black to-neon-blue relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Static badge */}
          <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-8">
            🤝 בואו נעבוד יחד
          </div>
          
          <h2 
            className="text-display font-black text-white mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`block text-shadow-brutal transition-all duration-300 ${
              isHovered ? 'scale-105' : ''
            }`}>
              מוכנים ליצור
            </span>
            <span className="block text-7xl mt-4">
              <span className="gradient-text-neon">
                משהו מדהים?
              </span>
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 font-medium">
            אני כאן כדי להפוך את החזון שלכם למציאות דיגיטלית
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href={CONTACT_CTAS.PHONE.href}>
              <Button
                variant="brutal"
                size="xl"
                className="font-black text-xl min-w-[250px]"
              >
                <span className="mr-2 text-2xl">📞</span>
                054-4994417
              </Button>
            </a>
            
            <Link href="/contact">
              <Button
                variant="glow"
                size="xl"
                className="font-black text-xl min-w-[250px]"
              >
                <span className="mr-2">💬</span>
                בואו נדבר
              </Button>
            </Link>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-8">
            <a 
              href={CONTACT_CTAS.EMAIL.href}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="text-3xl">✉️</span>
            </a>
            <a 
              href={CONTACT_CTAS.WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="text-3xl">💬</span>
            </a>
            <a 
              href="https://github.com/itayost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="text-3xl">💻</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}