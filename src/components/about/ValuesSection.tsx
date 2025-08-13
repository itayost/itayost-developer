'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { values } from '@/data/about';
import { useState } from 'react';

export default function ValuesSection() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  return (
    <section className="section bg-gradient-to-br from-neutral-100 via-white to-neon-yellow/5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-neon-green text-black font-black border-4 border-black shadow-brutal-lg mb-6 -rotate-2 animate-wiggle">
              🎯 הערכים שמנחים אותי
            </div>
            
            <h2 className="text-display font-black mb-6">
              <span className="gradient-text-fire">עקרונות</span>
              <span className="block text-4xl text-text-primary mt-2">שלא מתפשרים עליהם</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                variant={index % 2 === 0 ? 'brutal' : 'neon'}
                className={`group cursor-pointer transition-all duration-500 overflow-hidden ${
                  hoveredValue === index ? 'scale-105 z-10' : ''
                }`}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                style={{ 
                  transform: `rotate(${index % 4 === 0 ? -2 : index % 4 === 1 ? 2 : index % 4 === 2 ? -1 : 1}deg)`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="relative p-8">
                  {/* Icon with animation */}
                  <div className={`w-20 h-20 mb-6 flex items-center justify-center text-5xl transition-all duration-300 ${
                    hoveredValue === index 
                      ? 'bg-white shadow-brutal-lg animate-bounce' 
                      : 'bg-gradient-to-br from-white to-neutral-50'
                  } border-4 border-black`}>
                    {value.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-black mb-3 transition-colors duration-300 ${
                    hoveredValue === index ? 'text-white' : 'text-text-primary'
                  }`}>
                    {value.title}
                  </h3>
                  
                  <p className={`text-lg font-medium transition-colors duration-300 ${
                    hoveredValue === index ? 'text-white/90' : 'text-text-secondary'
                  }`}>
                    {value.description}
                  </p>
                  
                  {/* Hover indicator */}
                  {hoveredValue === index && (
                    <div className="absolute bottom-4 right-4 text-white font-black animate-pulse">
                      ←
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}