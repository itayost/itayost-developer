'use client';

import { stats } from '@/data/about';
import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    stats.forEach((stat, index) => {
      const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 16);
      
      return () => clearInterval(timer);
    });
  }, [isVisible]);
  
  return (
    <section id="stats-section" className="section bg-gradient-to-br from-black via-dark-surface to-dark-elevated relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-6">
              📊 במספרים
            </div>
            
            <h2 className="text-display font-black text-white mb-6">
              <span className="gradient-text-neon">תוצאות</span>
              <span className="block text-4xl text-white/90 mt-2">שמדברות  בעד  עצמן</span>
            </h2>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-${stat.color} to-transparent border-4 border-white shadow-brutal-lg flex items-center justify-center hover:shadow-brutal-xl transition-all duration-300`}>
                  <span className="text-5xl">{stat.icon}</span>
                </div>
                
                <div className="text-white">
                  <div className="text-4xl font-black mb-2">
                    {isVisible ? (
                      stat.value.includes('+') ? `${counters[index]}+` :
                      stat.value.includes('%') ? `${counters[index]}%` :
                      stat.value.includes('/') ? stat.value :
                      counters[index]
                    ) : '0'}
                  </div>
                  <div className="text-lg font-bold text-white/80">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}