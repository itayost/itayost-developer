'use client';

import Button from '@/components/ui/Button';
import { mobilePlatforms } from '@/data/services';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileAppsSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);
  
  return (
    <div id="apps" className="mb-32 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual showcase */}
        <div className="relative">
          <div className="relative">
            {/* Phone mockup */}
            <div className="aspect-[9/16] max-w-sm mx-auto bg-black border-8 border-black rounded-[3rem] shadow-brutal-xl relative overflow-hidden">
              <div className="absolute inset-4 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-[2rem] animate-gradient-shift">
                <div className="h-full flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4 animate-bounce">📱</div>
                    <div className="text-2xl font-black mb-2">האפליקציה שלך</div>
                    <div className="text-sm opacity-80">חוויה מושלמת בכל מכשיר</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Platform icons */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
              {mobilePlatforms.map((platform, idx) => (
                <div
                  key={idx}
                  className={`w-16 h-16 bg-white border-4 border-black shadow-brutal flex items-center justify-center text-3xl cursor-pointer transition-all duration-300 ${
                    selectedPlatform === idx ? 'bg-neon-yellow scale-110 -rotate-12' : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedPlatform(idx)}
                >
                  {platform.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          {/* Brutal badge */}
          <div className="inline-block px-6 py-2 bg-neon-blue text-white font-black border-4 border-black shadow-brutal mb-6 rotate-2">
            📱 אפליקציות שמכורות
          </div>
          
          <h2 className="text-display font-black mb-6">
            <span className="block">אפליקציות</span>
            <span className="gradient-text-neon">שמשנות משחק</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 leading-relaxed font-medium">
            חוויית משתמש מושלמת שהלקוחות שלך יתאהבו בה
          </p>
          
          {/* Platform cards */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {mobilePlatforms.map((platform, index) => (
              <div 
                key={index}
                className={`p-6 border-4 border-black transition-all duration-300 cursor-pointer ${
                  selectedPlatform === index 
                    ? 'bg-gradient-to-br from-neon-purple to-neon-blue text-white shadow-brutal-lg scale-105' 
                    : 'bg-white shadow-brutal hover:shadow-brutal-md hover:-translate-y-1'
                }`}
                onClick={() => setSelectedPlatform(index)}
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h4 className="font-black mb-1">{platform.name}</h4>
                <p className={`text-sm ${selectedPlatform === index ? 'text-white/80' : 'text-text-tertiary'}`}>
                  {platform.technologies}
                </p>
              </div>
            ))}
          </div>
          
          {/* Features list */}
          <div className="space-y-3 mb-10">
            {['ביצועים מטורפים', 'עיצוב שמדהים', 'חוויה חלקה', 'עדכונים בזמן אמת'].map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 text-lg font-bold animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="text-neon-green text-2xl">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <Link href="/contact">
            <Button variant="glow" size="lg" pulse className="font-black">
              בואו נבנה אפליקציה מטורפת
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}