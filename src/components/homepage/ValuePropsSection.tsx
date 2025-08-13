'use client';

import { VALUE_PROPS } from '@/lib/constants';
import { useState } from 'react';

export function ValuePropsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const props = [
    {
      ...VALUE_PROPS.PRICE,
      color: 'neon-yellow',
      bgColor: 'bg-neon-yellow',
      description: 'לא צריך לשבור את הבנק בשביל אתר מדהים. מחירים שעובדים לכולם.',
    },
    {
      ...VALUE_PROPS.PERSONAL,
      color: 'neon-purple',
      bgColor: 'bg-neon-purple',
      description: 'לא עוד תמיכה רובוטית. אצלנו מדברים עם בן אדם אמיתי.',
    },
    {
      ...VALUE_PROPS.SOLUTIONS,
      color: 'neon-blue',
      bgColor: 'bg-neon-blue',
      description: 'פתרונות שחושבים מחוץ לקופסה ופותרים בעיות אמיתיות.',
    },
    {
      ...VALUE_PROPS.SPEED,
      color: 'neon-green',
      bgColor: 'bg-neon-green', 
      description: 'מהרעיון להשקה בזמן שיא. בלי תירוצים, בלי עיכובים.',
    },
  ];
  
  return (
    <section className="section bg-black text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-blue/20 animate-gradient-shift" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-display font-black mb-8">
                למה דווקא
                <span className="block gradient-text-neon text-6xl mt-2">ItayOst?</span>
              </h2>
              
              <div className="space-y-6">
                {props.map((prop, index) => (
                  <div 
                    key={prop.title}
                    className={`group flex gap-4 p-4 rounded-none border-4 border-transparent hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                      activeIndex === index ? 'bg-white/10 border-white' : ''
                    }`}
                    onClick={() => setActiveIndex(index)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${prop.bgColor} text-black border-4 border-black shadow-brutal flex items-center justify-center text-3xl font-black group-hover:animate-wiggle`}>
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
            
            {/* Visual element */}
            <div className="relative">
              <div className="aspect-square relative">
                {/* Animated circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-neon-purple rounded-full animate-rotate-slow" />
                  <div className="absolute w-48 h-48 border-4 border-neon-blue rounded-full animate-rotate" />
                  <div className="absolute w-32 h-32 border-4 border-neon-green rounded-full animate-rotate-slow" />
                  <div className="absolute w-16 h-16 bg-neon-yellow rounded-full animate-pulse" />
                </div>
                
                {/* Central text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black gradient-text-neon animate-pulse-soft">
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