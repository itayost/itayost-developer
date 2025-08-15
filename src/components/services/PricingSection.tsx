'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { pricingPlans } from '@/data/services';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 bg-neon-green text-black font-black border-4 border-black shadow-brutal-lg mb-6">
            💰 מחירים שקופים והוגנים
          </div>
          
          <h2 className="text-display font-black mb-6">
            <span className="block">בחרו את החבילה</span>
            <span className="gradient-text-fire">שמתאימה לכם</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              variant={plan.featured ? 'brutal' : 'glass'}
              className={`relative transition-all duration-300 cursor-pointer ${
                plan.featured 
                  ? 'bg-gradient-to-br from-neon-yellow to-neon-green border-8 scale-105 z-10' 
                  : hoveredPlan === index 
                    ? 'scale-[1.02]' 
                    : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-black text-neon-yellow font-black text-lg border-4 border-neon-yellow shadow-brutal">
                  🔥 הכי פופולרי
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-black mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-text-secondary font-medium mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black">
                    ₪{plan.price}
                  </span>
                  <span className="text-text-tertiary">/פרויקט</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-sm font-medium transition-all duration-200"
                      style={{
                        opacity: hoveredPlan === index || plan.featured ? 1 : 0.8,
                        transform: hoveredPlan === index || plan.featured ? 'translateX(3px)' : 'translateX(0)'
                      }}
                    >
                      <span className="text-neon-green text-xl font-black">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="block">
                  <Button 
                    variant={plan.featured ? 'glow' : 'brutal'}
                    size="lg"
                    fullWidth
                    className="font-black"
                  >
                    {plan.featured ? '🚀 בואו נתחיל!' : 'בחר חבילה'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-text-tertiary mt-12 text-lg font-medium">
          לא מצאתם מה שחיפשתם? 
          <Link href="/contact" className="text-neon-purple font-black mr-2 hover:underline">
            בואו נבנה חבילה מותאמת אישית
          </Link>
        </p>
      </div>
    </section>
  );
}