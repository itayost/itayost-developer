'use client';

import { locationInfo } from '@/data/contact';
import { useState } from 'react';

export default function LocationSection() {
  const [isMapHovered, setIsMapHovered] = useState(false);
  
  return (
    <section className="section bg-gradient-to-br from-white via-neutral-50 to-neon-green/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-neon-green text-black font-black border-4 border-black shadow-brutal mb-6">
                📍 איפה אנחנו?
              </div>
              
              <h2 className="text-display font-black mb-6">
                {locationInfo.title}
              </h2>
              <p className="text-xl text-text-secondary font-medium mb-10">
                {locationInfo.description}
              </p>
              
              <div className="space-y-6">
                {locationInfo.details.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 border-4 border-black bg-white hover:bg-neon-yellow hover:shadow-brutal-md transition-all duration-300"
                  >
                    <div className={`w-14 h-14 flex items-center justify-center text-3xl flex-shrink-0 border-4 border-black shadow-brutal ${
                      index === 0 ? 'bg-neon-purple text-white' :
                      index === 1 ? 'bg-neon-blue text-white' :
                      'bg-neon-green'
                    }`}>
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-lg mb-1">{detail.title}</h3>
                      <p className="font-medium text-text-secondary">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map Placeholder - Bold Style */}
            <div 
              className="relative h-[400px] border-8 border-black shadow-brutal-xl overflow-hidden bg-gradient-to-br from-neon-purple via-neon-blue to-neon-green"
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                  <div className={`text-8xl mb-4 text-white transition-all duration-300 ${
                    isMapHovered ? 'scale-110' : ''
                  }`}>
                    🗺️
                  </div>
                  <p className="text-2xl font-black text-white mb-2">מפה אינטראקטיבית</p>
                  <p className="text-lg font-bold text-white/80">אפשר להוסיף Google Maps</p>
                </div>
              </div>
              
              {/* Decorative pin */}
              <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMapHovered ? 'scale-125' : ''
              }`}>
                <div className="relative">
                  <div className="w-16 h-16 bg-neon-yellow border-4 border-black shadow-brutal-lg flex items-center justify-center text-black text-3xl font-black">
                    📍
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-8 bg-black"></div>
                </div>
              </div>
              
              {/* Location badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-black font-black border-4 border-black shadow-brutal">
                רמת גן, תל אביב
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}