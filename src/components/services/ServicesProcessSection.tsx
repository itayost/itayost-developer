'use client';

import { servicesProcessSteps } from '@/data/services';
import { useEffect, useState } from 'react';

export default function ServicesProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % servicesProcessSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-gradient-to-br from-black via-brutal-black to-dark-surface text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-6 rotate-2">
            🚀 תהליך עבודה שקוף ומסודר
          </div>
          
          <h2 className="text-display font-black mb-6">
            איך אנחנו
            <span className="gradient-text-neon"> מגיעים לתוצאות?</span>
          </h2>
        </div>
        
        {/* Process timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {servicesProcessSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative text-center transition-all duration-500 ${
                  activeStep === index ? 'scale-110' : 'scale-100'
                }`}
              >
                {/* Step number */}
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center font-black text-xl transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-neon-yellow text-black border-4 border-white shadow-neon-yellow rotate-12' 
                    : 'bg-white/10 text-white border-2 border-white/30'
                }`}>
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className={`relative inline-block mb-6 transition-all duration-300 ${
                  activeStep === index ? 'animate-bounce' : ''
                }`}>
                  <div className={`w-24 h-24 flex items-center justify-center text-4xl transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-gradient-to-br from-neon-purple to-neon-blue shadow-brutal-lg' 
                      : 'bg-white/10 backdrop-blur-sm'
                  } border-4 border-white`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className={`font-black mb-2 text-lg transition-all duration-300 ${
                  activeStep === index ? 'text-neon-yellow' : 'text-white'
                }`}>
                  {step.title}
                </h3>
                <p className="text-sm text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}