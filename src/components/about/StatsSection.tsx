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
      {/* Animated background */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float-slow" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-6 rotate-2">
              📊 במספרים
            </div>
            
            <h2 className="text-display font-black text-white mb-6">
              <span className="gradient-text-neon">תוצאות</span>
              <span className="block text-4xl text-white/90 mt-2">שמדברות בעד עצמן</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-8 bg-white/10 backdrop-blur-md border-4 border-white/20 text-center transition-all duration-500 hover:scale-110 hover:bg-${stat.color}/20 hover:border-${stat.color} animate-fade-up`}>
                  {/* Icon */}
                  <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                    {stat.icon}
                  </div>
                  
                  {/* Counter */}
                  <div className={`text-5xl font-black text-${stat.color} mb-2`}>
                    {isVisible ? (
                      <>
                        {stat.value.includes('+') && counters[index] > 0 && `${counters[index]}+`}
                        {stat.value.includes('%') && counters[index] > 0 && `${counters[index]}%`}
                        {stat.value === '24/7' && '24/7'}
                        {stat.value.includes('+') && !stat.value.includes('%') && counters[index] === 0 && '0+'}
                      </>
                    ) : '0'}
                  </div>
                  
                  {/* Label */}
                  <p className="text-white/80 font-bold">{stat.label}</p>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 border-4 border-${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}