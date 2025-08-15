'use client';

import { useState } from 'react';

export default function ServicesProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const processSteps = [
    {
      icon: '🎯',
      title: 'הגדרת יעדים',
      description: 'מבינים בדיוק מה אתם צריכים ומה היעדים העסקיים',
    },
    {
      icon: '🎨',
      title: 'עיצוב ואפיון',
      description: 'יוצרים עיצוב ייחודי ומפרט טכני מלא',
    },
    {
      icon: '⚡',
      title: 'פיתוח מהיר',
      description: 'בונים את הפתרון עם טכנולוגיות מתקדמות',
    },
    {
      icon: '🚀',
      title: 'השקה ותמיכה',
      description: 'מעלים לאוויר ומספקים תמיכה מלאה',
    },
  ];
  
  return (
    <section className="section bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-black text-white mb-4">
              איך <span className="gradient-text-neon">עובדים איתנו?</span>
            </h2>
            <p className="text-xl text-white/80 font-medium">
              תהליך פשוט וברור מהרעיון למציאות
            </p>
          </div>
          
          {/* Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Icon circle */}
                <div className="mb-6 flex justify-center">
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