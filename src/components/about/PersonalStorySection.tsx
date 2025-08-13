'use client';

import { personalInfo, storyContent, timeline } from '@/data/about';
import { useState } from 'react';

export default function PersonalStorySection() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  
  return (
    <section className="section bg-gradient-to-br from-white via-neutral-50 to-neon-purple/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card - Static */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-neon-purple to-neon-blue p-8 border-8 border-black shadow-brutal-xl">
                  <div className="aspect-square bg-white/10 backdrop-blur-md flex items-center justify-center text-9xl">
                    {personalInfo.profileEmoji}
                  </div>
                  <div className="mt-6 text-center text-white">
                    <h2 className="text-3xl font-black mb-2">{personalInfo.name}</h2>
                    <p className="text-xl font-bold mb-4">{personalInfo.title}</p>
                    <p className="text-neon-yellow font-black">{personalInfo.tagline}</p>
                  </div>
                  <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-white text-sm font-medium">{personalInfo.funFact}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="lg:col-span-2">
              {/* Story sections */}
              <div className="space-y-8">
                {[storyContent.intro, storyContent.journey, storyContent.mission].map((text, idx) => (
                  <div 
                    key={idx}
                    className="p-8 bg-white border-4 border-black shadow-brutal-lg hover:shadow-brutal-xl transition-all duration-300"
                  >
                    <div className="text-lg leading-relaxed font-medium">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Motto */}
              <div className="mt-12 text-center">
                <div className="inline-block px-8 py-4 bg-black text-neon-yellow font-black text-2xl border-4 border-neon-yellow shadow-brutal-lg">
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
                          ? `bg-${item.color} shadow-brutal-lg scale-105` 
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
                        <div className="text-6xl">{item.icon}</div>
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