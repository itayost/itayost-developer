'use client';

import { technologyGroups } from '@/data/about';
import { useState } from 'react';

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  return (
    <section className="section bg-gradient-to-br from-white via-neutral-50 to-neon-purple/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-black border-4 border-black shadow-brutal-lg mb-6 -rotate-2">
              🛠️ ארגז הכלים שלי
            </div>
            
            <h2 className="text-display font-black mb-6">
              <span className="text-black">טכנולוגיות</span>
              <span className="block text-6xl gradient-text mt-2">שאני עובד איתן</span>
            </h2>
          </div>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologyGroups.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGroup(idx)}
                className={`px-8 py-3 font-black border-4 border-black transition-all duration-300 ${
                  activeGroup === idx 
                    ? 'bg-gradient-to-r ' + group.color + ' text-white shadow-brutal-lg scale-110 -rotate-2' 
                    : 'bg-white hover:shadow-brutal hover:scale-105'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
          
          {/* Technology grid */}
          <div className="relative min-h-[400px]">
            {technologyGroups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500 ${
                  activeGroup === groupIdx 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-10 absolute inset-0 pointer-events-none'
                }`}
              >
                {group.technologies.map((tech, techIdx) => (
                  <div
                    key={tech.name}
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      hoveredTech === tech.name ? 'z-10' : ''
                    }`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={{ animationDelay: `${techIdx * 50}ms` }}
                  >
                    <div className={`p-8 bg-white border-4 border-black shadow-brutal text-center transition-all duration-300 ${
                      hoveredTech === tech.name 
                        ? 'shadow-brutal-xl scale-110 bg-gradient-to-br ' + group.color + ' text-white -rotate-3' 
                        : 'hover:shadow-brutal-lg'
                    } animate-fade-up`}>
                      <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                        {tech.icon}
                      </div>
                      <h4 className={`font-black text-lg ${
                        hoveredTech === tech.name ? 'text-white' : 'text-text-primary'
                      }`}>
                        {tech.name}
                      </h4>
                    </div>
                    
                    {/* Floating badge on hover */}
                    {hoveredTech === tech.name && (
                      <div className="absolute -top-4 -right-4 px-3 py-1 bg-neon-yellow text-black font-black text-xs border-2 border-black shadow-brutal animate-bounce">
                        Expert
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}