'use client';

import Button from '@/components/ui/Button';
import { webDevelopmentFeatures } from '@/data/services';
import Link from 'next/link';
import { useState } from 'react';

export default function WebDevelopmentSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  return (
    <div id="websites" className="mb-32 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          {/* Static badge */}
          <div className="inline-block px-6 py-2 bg-neon-pink text-white font-black border-4 border-black shadow-brutal mb-6">
            🔥 השירות הכי מבוקש
          </div>
          
          <h2 className="text-display font-black mb-6">
            <span>אתרים</span>
            <br />
            <span className="gradient-text-fire">שמוכרים</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 leading-relaxed font-medium">
            לא סתם אתר - מכונת מכירות דיגיטלית שעובדת 24/7
          </p>
          
          {/* Features grid with simpler hover */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {webDevelopmentFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`relative p-4 border-4 border-black transition-all duration-300 cursor-pointer ${
                  hoveredFeature === index 
                    ? 'bg-neon-yellow shadow-brutal-lg -translate-y-1' 
                    : 'bg-white shadow-brutal hover:shadow-brutal-md'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <span className="text-3xl mb-2 block">{feature.icon}</span>
                <h4 className="font-black text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-text-tertiary">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <Link href="/contact">
              <Button variant="brutal" size="lg" className="font-black">
                בואו נבנה משהו מטורף →
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="neon" size="lg">
                ראו דוגמאות
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Visual showcase - simplified */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative">
            {/* Main display */}
            <div className="aspect-[4/3] bg-gradient-to-br from-neon-purple to-neon-blue border-8 border-black shadow-brutal-xl">
              <div className="h-full flex items-center justify-center relative overflow-hidden">
                {/* Static code lines */}
                <div className="absolute inset-0 p-8 font-mono text-xs text-neon-green/50">
                  <div>const website = "amazing";</div>
                  <div className="mt-2">return success(💰);</div>
                  <div className="mt-2">// Your business rocks!</div>
                </div>
                <div className="text-8xl">🌐</div>
              </div>
            </div>
            
            {/* Static badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-neon-green text-black font-black border-4 border-black shadow-brutal">
              מהיר ⚡
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-neon-pink text-white font-black border-4 border-black shadow-brutal">
              SEO 100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}