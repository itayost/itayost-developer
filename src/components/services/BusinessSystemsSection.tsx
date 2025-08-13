'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { useState } from 'react';

export default function BusinessSystemsSection() {
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);
  
  const systems = [
    {
      icon: '📊',
      title: 'מערכות CRM',
      description: 'ניהול לקוחות וליידים בצורה חכמה',
      features: ['ניהול אנשי קשר', 'מעקב אחר עסקאות', 'דוחות וניתוחים', 'אוטומציה של תהליכים'],
      color: 'neon-purple',
    },
    {
      icon: '📦',
      title: 'ניהול מלאי',
      description: 'שליטה מלאה על המלאי והמכירות',
      features: ['מעקב מלאי בזמן אמת', 'ניהול הזמנות', 'דוחות מכירות', 'התראות מלאי נמוך'],
      color: 'neon-green',
    },
    {
      icon: '🎓',
      title: 'מערכות הדרכה',
      description: 'פלטפורמות למידה דיגיטלית',
      features: ['ניהול קורסים', 'מעקב התקדמות', 'בחינות אונליין', 'תעודות דיגיטליות'],
      color: 'neon-blue',
    },
  ];
  
  return (
    <div id="systems" className="mb-32 scroll-mt-24">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-2 bg-neon-green text-black font-black border-4 border-black shadow-brutal mb-6">
          ⚡ אוטומציה שחוסכת זמן
        </div>
        
        <h2 className="text-display font-black mb-6">
          <span>מערכות</span>{' '}
          <span className="gradient-text">חכמות</span>
        </h2>
        
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          מערכות מותאמות אישית שמנהלות את העסק שלכם בזמן שאתם עוסקים במה שחשוב באמת
        </p>
      </div>
      
      {/* Systems grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {systems.map((system, index) => (
          <Card
            key={index}
            variant="brutal"
            hover="lift"
            className={`transition-all duration-300 ${
              hoveredSystem === index ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredSystem(index)}
            onMouseLeave={() => setHoveredSystem(null)}
          >
            <CardContent className="p-6">
              {/* Icon and title */}
              <div className="text-5xl mb-4">{system.icon}</div>
              <h3 className="text-2xl font-black mb-2">{system.title}</h3>
              <p className="text-text-secondary mb-6">{system.description}</p>
              
              {/* Features list */}
              <ul className="space-y-2">
                {system.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2 text-sm"
                    style={{
                      opacity: hoveredSystem === index ? 1 : 0.7,
                      transform: hoveredSystem === index ? 'translateX(5px)' : 'translateX(0)',
                      transition: `all 0.3s ease ${idx * 50}ms`
                    }}
                  >
                    <span className="text-neon-green font-black mt-0.5">→</span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover indicator */}
              {hoveredSystem === index && (
                <div className="mt-6 text-sm font-black text-neon-purple">
                  לחץ לפרטים נוספים ←
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="text-center">
        <p className="text-lg text-text-secondary mb-6">
          צריכים מערכת מותאמת אישית?
        </p>
        <Link href="/contact">
          <Button variant="brutal" size="lg" className="font-black bg-neon-green text-black border-black">
            בואו נבנה משהו חכם →
          </Button>
        </Link>
      </div>
    </div>
  );
}