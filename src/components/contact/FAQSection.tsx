'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { faqs } from '@/data/contact';
import { useState } from 'react';

export default function FAQSection() {
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null);
  
  return (
    <section className="section bg-gradient-to-br from-black via-gray-900 to-neon-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-3 bg-neon-yellow text-black font-black border-4 border-white shadow-brutal-lg mb-6">
              💡 שאלות נפוצות
            </div>
            
            <h2 className="text-display font-black text-white mb-4">
              יש לכם <span className="gradient-text-neon">שאלות?</span>
            </h2>
            <p className="text-xl text-white/80 font-medium">
              תשובות לשאלות שאנחנו שומעים הרבה
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                variant={index % 2 === 0 ? 'brutal' : 'glass'}
                className={`border-4 transition-all duration-300 ${
                  hoveredFaq === index ? 'scale-[1.02] shadow-brutal-xl' : ''
                } ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-neon-purple/10 to-neon-blue/10'}`}
                onMouseEnter={() => setHoveredFaq(index)}
                onMouseLeave={() => setHoveredFaq(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center text-2xl font-black border-4 border-black shadow-brutal ${
                      index % 3 === 0 ? 'bg-neon-yellow' : 
                      index % 3 === 1 ? 'bg-neon-green' : 
                      'bg-neon-purple text-white'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl mb-3">{faq.question}</h3>
                      <p className="text-text-secondary font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}