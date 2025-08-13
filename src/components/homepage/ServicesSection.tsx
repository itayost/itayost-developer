'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const extendedServices = [
    {
      id: 'websites',
      title: 'אתרים שמוכרים',
      icon: '🎨',
      description: 'לא עוד אתר סטטי משעמם. אנחנו בונים חוויות דיגיטליות שמשאירות רושם',
      features: ['עיצוב ייחודי', 'אנימציות מרהיבות', 'SEO מובנה', 'מהירות טעינה'],
      color: 'neon-purple',
      size: 'large',
      popular: true,
    },
    {
      id: 'apps',
      title: 'אפליקציות',
      icon: '📱',
      description: 'אפליקציות שמשנות את המשחק',
      features: ['חוויית משתמש', 'ביצועים גבוהים'],
      color: 'neon-blue',
      size: 'medium',
    },
    {
      id: 'systems',
      title: 'מערכות ניהול',
      icon: '⚙️',
      description: 'אוטומציה שחוסכת זמן וכסף',
      features: ['התאמה אישית', 'ממשקים חכמים'],
      color: 'neon-green',
      size: 'medium',
    },
  ];
  
  return (
    <section className="section bg-gradient-to-b from-white to-background-secondary">
      <div className="container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-neon-yellow text-black font-black border-4 border-black shadow-brutal mb-6">
            השירותים שלנו
          </div>
          <h2 className="text-display font-black mb-6">
            <span className="text-black">פתרונות</span>{' '}
            <span className="gradient-text">שעובדים</span>
          </h2>
          <p className="text-xl text-text-secondary">
            מהרעיון ועד ההשקה - אנחנו איתכם בכל שלב
          </p>
        </div>
        
        {/* Services Grid - Bento style with less rotation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Large card - Websites */}
          <Card
            variant="brutal"
            hover="lift"
            className={`lg:col-span-2 lg:row-span-2 border-4 transition-all duration-300 ${
              hoveredCard === 'websites' ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('websites')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-neon-purple text-white font-bold text-sm border-2 border-black shadow-brutal-sm">
                הכי פופולרי
              </span>
            </div>
            
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-3xl font-black mb-2">אתרים שמוכרים</h3>
                  <p className="text-lg text-text-secondary">
                    לא עוד אתר סטטי משעמם. אנחנו בונים חוויות דיגיטליות שמשאירות רושם
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {['עיצוב ייחודי', 'אנימציות מרהיבות', 'SEO מובנה', 'מהירות טעינה'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-neon-purple text-xl">✓</span>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/services#websites" className="mt-6">
                <Button variant="brutal" fullWidth className="bg-neon-purple text-white border-black">
                  רוצה אתר כזה →
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Medium card - Apps */}
          <Card
            variant="neon"
            hover="glow"
            className={`transform transition-all duration-300 ${
              hoveredCard === 'apps' ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('apps')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-black mb-2">אפליקציות</h3>
              <p className="text-text-secondary mb-4 flex-grow">
                אפליקציות שמשנות את המשחק
              </p>
              <div className="space-y-2 mb-4">
                {['חוויית משתמש', 'ביצועים גבוהים'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-neon-blue">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/services#apps">
                <Button variant="neon" fullWidth size="sm">
                  גלה עוד →
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Medium card - Systems */}
          <Card
            variant="glass"
            hover="lift"
            className={`transform transition-all duration-300 ${
              hoveredCard === 'systems' ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setHoveredCard('systems')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-6 h-full flex flex-col">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-black mb-2">מערכות ניהול</h3>
              <p className="text-text-secondary mb-4 flex-grow">
                אוטומציה שחוסכת זמן וכסף
              </p>
              <div className="space-y-2 mb-4">
                {['התאמה אישית', 'ממשקים חכמים'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-neon-green">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/services#systems">
                <Button variant="outline" fullWidth size="sm">
                  גלה עוד →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary mb-6">
            לא בטוחים מה אתם צריכים?
          </p>
          <Link href="/contact">
            <Button variant="brutal" size="lg" className="font-black text-lg">
              בואו נדבר על זה →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}