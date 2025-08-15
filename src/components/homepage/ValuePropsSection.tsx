'use client';

import { useState } from 'react';

export function ValuePropsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const valueProps = [
    {
      icon: '⚡',
      title: 'מהירות פיתוח',
      description: 'משלב הרעיון ועד העלייה לאוויר - אנחנו עובדים מהר ויעיל',
      bgColor: 'bg-neon-yellow',
    },
    {
      icon: '💎',
      title: 'איכות ללא פשרות',
      description: 'קוד נקי, עיצוב מושלם, וחוויית משתמש שמדברת בעד עצמה',
      bgColor: 'bg-neon-purple',
    },
    {
      icon: '🎯',
      title: 'תוצאות מדידות',
      description: 'לא סתם אתר יפה - פתרונות שמביאים לידים ומכירות',
      bgColor: 'bg-neon-green',
    },
    {
      icon: '🤝',
      title: 'יחס אישי',
      description: 'לא סתם ספק - שותף אמיתי להצלחה של העסק שלכם',
      bgColor: 'bg-neon-blue',
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
            <h2 className="text-display font-black mb-6">
              <span className="text-white">למה</span>{' '}
              <span className="gradient-text-neon">אנחנו?</span>
            </h2>
            <p className="text-2xl text-white/80 font-medium">
              כי אנחנו לא עוד סטודיו דיגיטלי
            </p>
          </div>
          
          {/* Value props grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Props list */}
            <div>
              <div className="space-y-4 sm:space-y-6">
                {valueProps.map((prop, index) => (
                  <div
                    key={index}
                    className={`group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 border-2 transition-all duration-300 cursor-pointer ${
                      activeIndex === index 
                        ? 'bg-white/10 border-white shadow-brutal-lg' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${prop.bgColor} text-black border-4 border-black shadow-brutal flex items-center justify-center text-3xl font-black`}>
                      {prop.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl mb-1 text-white group-hover:text-neon-yellow transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual element - static with subtle effects */}
            <div className="relative">
              <div className="aspect-square relative">
                {/* Simple circles without rotation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-neon-purple rounded-full" />
                  <div className="absolute w-48 h-48 border-4 border-neon-blue rounded-full" />
                  <div className="absolute w-32 h-32 border-4 border-neon-green rounded-full" />
                  <div className="absolute w-16 h-16 bg-neon-yellow rounded-full" />
                </div>
                
                {/* Central text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black gradient-text-neon">
                      98%
                    </div>
                    <p className="text-xl text-white/80 font-bold">שביעות רצון</p>
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