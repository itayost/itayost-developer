'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export function CaseStudySection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-b from-background-secondary to-white relative overflow-hidden">
      {/* Simple pattern background */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-neon-pink text-white font-black border-4 border-black shadow-brutal mb-6">
              סיפור הצלחה
            </div>
            <h2 className="text-display font-black">
              <span className="text-black">תוצאות</span>{' '}
              <span className="gradient-text">אמיתיות</span>
            </h2>
          </div>
          
          {/* Case study content */}
          <div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-neon-yellow text-black font-bold text-sm border-2 border-black shadow-brutal-sm mb-4">
                פרויקט מוביל
              </div>
              
              <h3 className="text-4xl font-black mb-4">
                אקדמיית הספרות המובילה בישראל
              </h3>
              
              <p className="text-xl text-text-secondary mb-6 leading-relaxed">
                בנינו מערכת CRM מותאמת אישית שחיברה בין אתר תדמית מרשים למערכת ניהול תלמידים חכמה. 
                התוצאה? 40% יותר הרשמות ו-15 שעות עבודה שנחסכות כל שבוע.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'אתר תדמית עם מערכת הרשמה אונליין',
                  'CRM מותאם אישית לניהול 500+ תלמידים',
                  'אוטומציה של תהליכי עבודה ותזכורות',
                  'דוחות וניתוחים בזמן אמת',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-neon-green font-black text-xl mt-0.5">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <Link href="/portfolio">
                  <Button variant="brutal" size="lg" className="font-black">
                    ראו עוד פרויקטים →
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="neon" size="lg">
                    רוצים תוצאות דומות?
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative order-1 lg:order-2">
              <div className={`aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-4 border-black shadow-brutal-xl overflow-hidden transform transition-all duration-500 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-8xl mb-4">💈</div>
                    <p className="text-2xl font-bold text-white/80">Barbershop Academy</p>
                    <p className="text-lg text-white/60 mt-2">CRM + Website</p>
                  </div>
                  
                  {/* Static stats badges */}
                  <div className="absolute top-4 right-4 bg-neon-green text-black px-4 py-2 font-black border-4 border-black shadow-brutal">
                    +40% הרשמות
                  </div>
                  <div className="absolute bottom-4 left-4 bg-neon-purple text-white px-4 py-2 font-black border-4 border-black shadow-brutal">
                    15 שעות נחסכו
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}