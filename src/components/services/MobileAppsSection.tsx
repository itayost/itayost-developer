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
            {/* Phone mockup - simplified */}
            <div className="aspect-[9/16] max-w-sm mx-auto bg-black border-8 border-black rounded-[3rem] shadow-brutal-xl relative overflow-hidden">
              <div className="absolute inset-4 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-[2rem]">
                <div className="h-full flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-2xl font-black mb-2">האפליקציה שלך</div>
                    <div className="text-sm opacity-80">חוויה מושלמת בכל מכשיר</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Platform icons - static */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
              {mobilePlatforms.map((platform, idx) => (
                <div
                  key={idx}
                  className={`w-16 h-16 bg-white border-4 border-black shadow-brutal flex items-center justify-center text-3xl cursor-pointer transition-all duration-300 ${
                    selectedPlatform === idx 
                      ? 'bg-neon-yellow -translate-y-1' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedPlatform(idx)}
                >
                  {platform.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div>
          <div className="inline-block px-6 py-2 bg-neon-blue text-white font-black border-4 border-black shadow-brutal mb-6">
            📱 מוביל עסקים קדימה
          </div>
          
          <h2 className="text-display font-black mb-6">
            <span>אפליקציות</span>
            <br />
            <span className="gradient-text">שמכורות</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 leading-relaxed font-medium">
            אפליקציות שמשתמשים אוהבים - מהירות, יפות, ועובדות מושלם
          </p>
          
          {/* Features list */}
          <div className="space-y-4 mb-10">
            {[
              'פיתוח ל-iOS ואנדרואיד במקביל',
              'React Native - קוד אחד לכל הפלטפורמות',
              'עיצוב UI/UX שמותאם למובייל',
              'ביצועים מטורפים וחוויית משתמש חלקה',
              'התממשקות עם APIs ושירותים חיצוניים',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-neon-blue font-black text-xl mt-0.5">✓</span>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <Link href="/contact">
              <Button variant="brutal" size="lg" className="font-black bg-neon-blue text-white border-black">
                בואו נבנה אפליקציה →
              </Button>
            </Link>
            <Link href="/portfolio#apps">
              <Button variant="outline" size="lg">
                ראו דוגמאות
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}