'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export function CaseStudySection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-neon-purple via-primary-900 to-neon-blue text-white relative overflow-hidden">
      {/* Animated patterns */}
      <div className="absolute inset-0 pattern-diagonal opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-neon-yellow text-black border-4 border-black shadow-brutal-lg font-black animate-wiggle">
              <span className="text-2xl">⭐</span>
              הפרויקט שכולם מדברים עליו
              <span className="text-2xl">⭐</span>
            </div>
          </div>
          
          {/* Case Study Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-display font-black mb-6">
                <span className="text-white/80">מניהול ידני</span>
                <br />
                <span className="gradient-text-neon text-6xl">לאוטומציה מלאה</span>
              </h2>
              
              <h3 className="text-3xl font-bold mb-8 text-neon-yellow">
                אקדמיה למספרות
              </h3>
              
              <div className="space-y-6 mb-10">
                <div 
                  className="flex gap-4 p-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-neon-yellow hover:bg-white/20 transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-danger text-white border-4 border-black shadow-brutal flex items-center justify-center text-2xl font-black animate-pulse">
                    ⚠️
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-white">האתגר</h4>
                    <p className="text-white/80">
                      ניהול ידני של 200+ סטודנטים, רישום קורסים בטלפון, אין נוכחות דיגיטלית
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-neon-green hover:bg-white/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-neon-green text-black border-4 border-black shadow-brutal flex items-center justify-center text-2xl font-black">
                    💡
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-white">הפתרון</h4>
                    <p className="text-white/80">
                      אתר מודרני + מערכת CRM מלאה + אוטומציה של כל התהליכים
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-neon-purple hover:bg-white/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-neon-purple text-white border-4 border-black shadow-brutal flex items-center justify-center text-2xl font-black animate-bounce">
                    🎯
                  </div>
                  <div>
                    <h4 className="font-black text-xl mb-1 text-white">התוצאה</h4>
                    <p className="text-white/80 font-bold">
                      חיסכון של 15 שעות שבועיות • עלייה של 40% בהרשמות • 100% שביעות רצון
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link href="/portfolio">
                  <Button variant="glow" size="lg">
                    ראה עוד הצלחות
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="brutal" size="lg" className="bg-white text-black">
                    רוצה תוצאות כאלה?
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Visual element */}
            <div className="relative order-1 lg:order-2">
              <div className={`aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-4 border-black shadow-brutal-xl overflow-hidden transform transition-all duration-500 ${
                isHovered ? 'rotate-3 scale-105' : 'rotate-0'
              }`}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-float">💈</div>
                    <p className="text-2xl font-bold text-white/80">Barbershop Academy</p>
                    <p className="text-lg text-white/60 mt-2">CRM + Website</p>
                  </div>
                  
                  {/* Animated stats */}
                  <div className="absolute top-4 right-4 bg-neon-green text-black px-4 py-2 font-black border-4 border-black shadow-brutal animate-pulse">
                    +40% הרשמות
                  </div>
                  <div className="absolute bottom-4 left-4 bg-neon-purple text-white px-4 py-2 font-black border-4 border-black shadow-brutal animate-pulse">
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