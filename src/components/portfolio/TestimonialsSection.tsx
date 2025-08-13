'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slower rotation
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  return (
    <section className="section bg-gradient-to-br from-black via-dark-surface to-dark-elevated relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-6">
            💬 מה הלקוחות אומרים
          </div>
          
          <h2 className="text-display font-black text-white mb-6">
            <span className="gradient-text-neon">ביקורות אמיתיות</span>
            <span className="block text-4xl text-white/90 mt-2">מלקוחות מרוצים</span>
          </h2>
        </div>
        
        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card 
            variant="glass" 
            className="bg-white/10 backdrop-blur-lg border-4 border-white/20 p-8 lg:p-12"
          >
            <CardContent>
              {/* Static stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i}
                    className="text-4xl text-neon-yellow"
                  >
                    ★
                  </span>
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-center mb-8">
                <p className="text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-neon-yellow text-black border-4 border-black shadow-brutal flex items-center justify-center text-3xl font-black">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-white">
                  <p className="text-xl font-black">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-white/70">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Testimonial navigation */}
        <div className="flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTestimonial(index);
                setIsAutoPlaying(false);
              }}
              className={`w-16 h-16 border-4 border-white font-black text-lg transition-all duration-300 ${
                activeTestimonial === index 
                  ? 'bg-neon-yellow text-black shadow-neon-yellow scale-105' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        {/* Auto-play toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 font-bold border-2 border-white/30 text-white transition-all duration-300 ${
              isAutoPlaying ? 'bg-white/20' : 'bg-white/10'
            } hover:bg-white/30`}
          >
            {isAutoPlaying ? '⏸ השהה' : '▶ הפעל אוטומטי'}
          </button>
        </div>
      </div>
    </section>
  );
}