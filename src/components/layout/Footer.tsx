'use client';

import Button from '@/components/ui/Button';
import { CONTACT_CTAS, NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  
  const currentYear = new Date().getFullYear();
  
  const handleEmailCopy = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-black via-dark-surface to-neon-purple/20 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float-slow" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="container relative z-10">
        <div className="py-16 md:py-20">
          {/* Top section with CTA */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-6">
              <span className="gradient-text-neon">רוצים להתחיל משהו מטורף?</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  variant="brutal" 
                  size="lg"
                  className="font-black bg-neon-yellow hover:rotate-2"
                >
                  <span className="mr-2 text-2xl">🚀</span>
                  בואו נדבר
                </Button>
              </Link>
              <a href={CONTACT_CTAS.WHATSAPP.href} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="glow" 
                  size="lg"
                  pulse
                  className="font-black"
                >
                  <span className="mr-2 text-2xl">💬</span>
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
          
          {/* Main footer content */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6 group">
                <h3 className="text-3xl font-black">
                  <span className="text-white group-hover:text-neon-yellow transition-colors">Itay</span>
                  <span className="text-neon-purple group-hover:text-neon-yellow transition-colors">Ost</span>
                </h3>
                <div className="h-1 bg-gradient-to-r from-neon-purple to-neon-blue mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
              
              <p className="text-white/80 text-lg leading-relaxed max-w-md mb-8 font-medium">
                {SITE_CONFIG.description}
              </p>
              
              {/* Fun stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: '🏆', value: '200+', label: 'פרויקטים' },
                  { icon: '😊', value: '98%', label: 'שביעות רצון' },
                  { icon: '⚡', value: '24/7', label: 'תמיכה' },
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    style={{ transform: `rotate(${idx === 1 ? -2 : idx === 2 ? 2 : 0}deg)` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{stat.icon}</span>
                      <div>
                        <div className="font-black text-neon-yellow">{stat.value}</div>
                        <div className="text-xs text-white/70">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-black mb-6 text-neon-yellow">
                קישורים מהירים
              </h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group relative inline-block"
                      onMouseEnter={() => setHoveredLink(item.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`font-bold transition-all duration-300 ${
                        hoveredLink === item.href 
                          ? 'text-neon-yellow' 
                          : 'text-white/70 hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                      {hoveredLink === item.href && (
                        <span className="absolute -right-6 text-neon-yellow animate-bounce">
                          →
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-black mb-6 text-neon-green">
                בואו נדבר
              </h4>
              <div className="space-y-4">
                {/* Phone */}
                <a 
                  href={CONTACT_CTAS.PHONE.href}
                  className="group flex items-center gap-3 px-4 py-3 bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-neon-yellow transition-all duration-300"
                >
                  <span className="text-2xl group-hover:animate-wiggle">📞</span>
                  <span dir="ltr" className="font-bold">{SITE_CONFIG.phone}</span>
                </a>
                
                {/* Email with copy */}
                <button
                  onClick={handleEmailCopy}
                  className="group flex items-center gap-3 px-4 py-3 bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-neon-green transition-all duration-300 w-full text-left"
                >
                  <span className="text-2xl group-hover:animate-bounce">✉️</span>
                  <span className="font-bold text-sm">
                    {emailCopied ? 'הועתק!' : SITE_CONFIG.email}
                  </span>
                </button>
                
                {/* WhatsApp */}
                <a 
                  href={CONTACT_CTAS.WHATSAPP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-neon-blue transition-all duration-300"
                >
                  <span className="text-2xl group-hover:animate-pulse">💬</span>
                  <span className="font-bold">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black">
              <span className="text-2xl animate-rotate-slow">⚡</span>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 font-medium">
                © {currentYear} ItayOst. כל הזכויות שמורות.
              </p>
              <p className="text-xs text-white/40 mt-1">
                נבנה עם <span className="text-red-500 animate-pulse">❤️</span> ו-
                <span className="text-neon-yellow font-bold"> הרבה קפה ☕</span>
              </p>
            </div>
            
            {/* Fun badges */}
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-neon-yellow text-black font-black text-xs border-2 border-black shadow-brutal rotate-2">
                100% ORIGINAL
              </div>
              <div className="px-3 py-1 bg-neon-green text-black font-black text-xs border-2 border-black shadow-brutal -rotate-2">
                MADE IN 🇮🇱
              </div>
              <div className="px-3 py-1 bg-neon-purple text-white font-black text-xs border-2 border-white shadow-brutal rotate-1">
                NO AI
              </div>
            </div>
            
            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group w-12 h-12 bg-white text-black border-4 border-black shadow-brutal hover:shadow-brutal-lg flex items-center justify-center font-black text-xl hover:bg-neon-yellow transition-all duration-300 hover:rotate-12"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
      
      {/* Easter egg - hidden message */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-[8px] text-white/5 select-none">
        אם אתה קורא את זה, אתה מפתח אמיתי 🤓
      </div>
    </footer>
  );
}