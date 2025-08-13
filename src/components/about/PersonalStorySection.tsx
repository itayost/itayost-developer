'use client';

import { personalInfo, storyContent, timeline } from '@/data/about';
import { useState } from 'react';

export default function PersonalStorySection() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-white via-neutral-50 to-neon-purple/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card - Flippable */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Card container with flip animation */}
                  <div className={`transition-all duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}>
                    {/* Front side */}
                    <div className={`${isFlipped ? 'hidden' : 'block'}`}>
                      <div className="bg-gradient-to-br from-neon-purple to-neon-blue p-8 border-8 border-black shadow-brutal-xl">
                        <div className="aspect-square bg-white/10 backdrop-blur-md flex items-center justify-center text-9xl">
                          {personalInfo.profileEmoji}
                        </div>
                        <div className="mt-6 text-center text-white">
                          <h2 className="text-3xl font-black mb-2">{personalInfo.name}</h2>
                          <p className="text-xl font-bold mb-4">{personalInfo.title}</p>
                          <p className="text-neon-yellow font-black">{personalInfo.tagline}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back side - Fun facts */}
                    <div className={`${!isFlipped ? 'hidden' : 'block'}`}>
                      <div className="bg-gradient-to-br from-neon-yellow to-neon-green p-8 border-8 border-black shadow-brutal-xl">
                        <div className="text-center">
                          <h3 className="text-2xl font-black mb-6 text-black">Fun Facts</h3>
                          <div className="space-y-4 text-black">
                            <div className="p-4 bg-white/80 border-4 border-black">
                              <span className="text-3xl">☕</span>
                              <p className="font-bold">5 כוסות קפה ביום</p>
                            </div>
                            <div className="p-4 bg-white/80 border-4 border-black">
                              <span className="text-3xl">🌙</span>
                              <p className="font-bold">עובד הכי טוב בלילה</p>
                            </div>
                            <div className="p-4 bg-white/80 border-4 border-black">
                              <span className="text-3xl">🎮</span>
                              <p className="font-bold">גיימר בזמן הפנוי</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flip indicator */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-xs font-bold animate-pulse">
                    לחץ להפוך →
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="lg:col-span-2">
              {/* Story blocks with brutal cards */}
              <div className="space-y-8">
                {Object.entries(storyContent).slice(0, 4).map(([key, text], idx) => (
                  <div 
                    key={key}
                    className={`p-8 border-4 border-black shadow-brutal-lg bg-white transform transition-all duration-500 hover:shadow-brutal-xl hover:-translate-y-1 animate-fade-up`}
                    style={{ 
                      transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)`,
                      animationDelay: `${idx * 100}ms`
                    }}
                  >
                    <div className="text-lg leading-relaxed font-medium">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Motto */}
              <div className="mt-12 text-center">
                <div className="inline-block px-8 py-4 bg-black text-neon-yellow font-black text-2xl border-4 border-neon-yellow shadow-brutal-lg rotate-2 animate-wiggle">
                  "{storyContent.motto}"
                </div>
              </div>
              
              {/* Interactive Timeline */}
              <div className="mt-16">
                <h3 className="text-3xl font-black mb-8 text-center">
                  <span className="gradient-text">המסע שלי</span>
                </h3>
                
                {/* Timeline navigation */}
                <div className="flex justify-center gap-4 mb-8">
                  {timeline.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTimeline(idx)}
                      className={`px-6 py-3 font-black border-4 border-black transition-all duration-300 ${
                        activeTimeline === idx 
                          ? `bg-${item.color} shadow-brutal-lg scale-110 -rotate-2` 
                          : 'bg-white hover:shadow-brutal'
                      }`}
                    >
                      {item.year}
                    </button>
                  ))}
                </div>
                
                {/* Timeline content */}
                <div className="relative overflow-hidden">
                  {timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-8 border-8 border-black shadow-brutal-xl transition-all duration-500 ${
                        activeTimeline === idx 
                          ? 'opacity-100 transform translate-x-0' 
                          : 'opacity-0 transform translate-x-full absolute top-0'
                      }`}
                      style={{ backgroundColor: `var(--${item.color})` }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="text-6xl animate-bounce">{item.icon}</div>
                        <div>
                          <h4 className="text-2xl font-black mb-2 text-white">{item.title}</h4>
                          <p className="text-lg text-white/90 font-medium">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}