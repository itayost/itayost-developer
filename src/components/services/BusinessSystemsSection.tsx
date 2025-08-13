'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { businessSystems } from '@/data/services';
import { useState } from 'react';

export default function BusinessSystemsSection() {
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);
  
  return (
    <div id="systems" className="scroll-mt-24">
      <div className="text-center mb-16">
        {/* Animated badge */}
        <div className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-black border-4 border-black shadow-brutal-lg mb-6 animate-wiggle">
          ⚡ מערכות שחוסכות זמן וכסף ⚡
        </div>
        
        <h2 className="text-display font-black mb-6">
          <span className="block">מערכות עסקיות</span>
          <span className="gradient-text-fire">שעובדות בשבילך</span>
        </h2>
        
        <p className="text-xl text-text-secondary max-w-3xl mx-auto font-medium">
          אוטומציה חכמה שמשחררת אתכם להתמקד במה שחשוב באמת
        </p>
      </div>
      
      {/* Bento grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businessSystems.map((system, index) => (
          <Card 
            key={index}
            variant={index === 0 ? 'brutal' : index === 1 ? 'neon' : 'glass'}
            className={`group cursor-pointer transition-all duration-500 ${
              hoveredSystem === index ? 'scale-105 z-10' : ''
            } ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            onMouseEnter={() => setHoveredSystem(index)}
            onMouseLeave={() => setHoveredSystem(null)}
            style={{ 
              transform: `rotate(${index % 3 === 0 ? -1 : index % 3 === 1 ? 1 : 0}deg)`,
              animationDelay: `${index * 100}ms` 
            }}
          >
            <CardContent className="p-8">
              {/* Icon with animation */}
              <div className={`text-6xl mb-6 ${hoveredSystem === index ? 'animate-bounce' : ''}`}>
                {system.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-black mb-3">
                {system.title}
              </h3>
              
              {/* Description */}
              <p className="text-text-secondary mb-6 font-medium">
                {system.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {system.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2 text-sm"
                    style={{ 
                      opacity: hoveredSystem === index ? 1 : 0.7,
                      transform: hoveredSystem === index ? 'translateX(5px)' : 'translateX(0)',
                      transition: `all 0.3s ease ${idx * 50}ms`
                    }}
                  >
                    <span className="text-neon-green font-black mt-0.5">→</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover indicator */}
              {hoveredSystem === index && (
                <div className="mt-6 text-sm font-black text-neon-purple animate-pulse">
                  לחץ לפרטים נוספים ←
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}