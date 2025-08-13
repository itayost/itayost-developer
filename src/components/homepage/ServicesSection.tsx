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
      rotation: -2,
    },
    {
      id: 'apps',
      title: 'אפליקציות שמכורות',
      icon: '📱',
      description: 'אפליקציות שמשתמשים אוהבים להשתמש בהן',
      features: ['iOS & Android', 'React Native', 'UI/UX מושלם'],
      color: 'neon-blue',
      size: 'medium',
      rotation: 1,
    },
    {
      id: 'systems',
      title: 'מערכות שחוסכות זמן',
      icon: '⚡',
      description: 'אוטומציה של כל מה שאפשר לאטמט',
      features: ['CRM מותאם', 'ניהול מלאי', 'דשבורדים'],
      color: 'neon-green',
      size: 'medium',
      rotation: -1,
    },
    {
      id: 'ai',
      title: 'AI & צ׳אטבוטים',
      icon: '🤖',
      description: 'הטמעת בינה מלאכותית בעסק שלך',
      features: ['ChatGPT', 'אוטומציה חכמה'],
      color: 'neon-yellow',
      size: 'small',
      rotation: 2,
    },
    {
      id: 'consulting',
      title: 'ייעוץ דיגיטלי',
      icon: '💡',
      description: 'אסטרטגיה דיגיטלית מנצחת',
      features: ['ניתוח שוק', 'תכנון מוצר'],
      color: 'neon-pink',
      size: 'small',
      rotation: -3,
    },
  ];
  
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <h2 className="text-display font-black mb-2">
                <span className="text-black">מה אנחנו</span>{' '}
                <span className="gradient-text-neon">עושים?</span>
              </h2>
              <div className="h-2 bg-neon-yellow" />
            </div>
            <p className="text-2xl text-text-secondary font-medium max-w-3xl mx-auto">
              פתרונות דיגיטליים שלא רק עובדים - הם
              <span className="text-black font-bold"> מרשימים</span>
            </p>
          </div>
          
          {/* BentoGrid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Large card - Websites */}
            <Card
              variant="brutal"
              hover="lift"
              className={`lg:col-span-2 lg:row-span-2 transform transition-all duration-500 hover:z-10 ${
                hoveredCard === 'websites' ? 'scale-105' : ''
              }`}
              style={{ transform: `rotate(${-1}deg)` }}
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
                    <div className="text-6xl mb-4 animate-bounce-in">🎨</div>
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
              className={`transform transition-all duration-500 hover:z-10 ${
                hoveredCard === 'apps' ? 'scale-105' : ''
              }`}
              style={{ transform: `rotate(${2}deg)` }}
              onMouseEnter={() => setHoveredCard('apps')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="text-5xl mb-4 animate-float">📱</div>
                <h3 className="text-2xl font-black mb-2 gradient-text">אפליקציות</h3>
                <p className="text-text-secondary mb-4">
                  אפליקציות שמשתמשים אוהבים
                </p>
                <ul className="space-y-2 mb-6">
                  {['iOS & Android', 'React Native', 'UI/UX מושלם'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-neon-blue">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services#apps">
                  <Button variant="neon" size="sm" fullWidth>
                    פרטים נוספים
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Medium card - Systems */}
            <Card
              variant="brutal"
              hover="rotate"
              className={`bg-neon-green text-black transform transition-all duration-500 hover:z-10 ${
                hoveredCard === 'systems' ? 'scale-105' : ''
              }`}
              style={{ transform: `rotate(${-2}deg)` }}
              onMouseEnter={() => setHoveredCard('systems')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="text-5xl mb-4 animate-wiggle">⚡</div>
                <h3 className="text-2xl font-black mb-2">מערכות חכמות</h3>
                <p className="text-black/80 mb-4 font-medium">
                  אוטומציה שחוסכת זמן ומשאבים
                </p>
                <ul className="space-y-2 mb-6">
                  {['CRM מותאם', 'ניהול מלאי', 'דשבורדים'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                      <span>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services#systems">
                  <Button variant="brutal" size="sm" fullWidth className="bg-black text-neon-green">
                    בואו נאטמט
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Small card - AI */}
            <Card
              variant="glass"
              hover="lift"
              className={`bg-gradient-to-br from-neon-yellow/20 to-neon-pink/20 transform transition-all duration-500 hover:z-10 ${
                hoveredCard === 'ai' ? 'scale-105' : ''
              }`}
              style={{ transform: `rotate(${1}deg)` }}
              onMouseEnter={() => setHoveredCard('ai')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-3 animate-pulse">🤖</div>
                <h3 className="text-xl font-black mb-2">AI & אוטומציה</h3>
                <p className="text-sm text-text-secondary mb-4">
                  הטמעת ChatGPT ובינה מלאכותית
                </p>
                <Button variant="split" size="sm" fullWidth>
                  זה העתיד
                </Button>
              </CardContent>
            </Card>
            
            {/* Small card - Consulting */}
            <Card
              variant="brutal"
              className={`bg-gradient-to-br from-neon-pink to-neon-purple text-white transform transition-all duration-500 hover:z-10 ${
                hoveredCard === 'consulting' ? 'scale-105' : ''
              }`}
              style={{ transform: `rotate(${-1}deg)` }}
              onMouseEnter={() => setHoveredCard('consulting')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-black mb-2">ייעוץ דיגיטלי</h3>
                <p className="text-sm text-white/90 mb-4">
                  אסטרטגיה דיגיטלית שעובדת
                </p>
                <Button variant="brutal" size="sm" fullWidth className="bg-white text-black">
                  קבל ייעוץ חינם
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <Link href="/services">
              <Button variant="glow" size="lg" pulse>
                רוצה לראות את כל מה שאנחנו יכולים? 
                <span className="ml-2">🚀</span>
              </Button>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 text-8xl text-neon-purple/10 animate-rotate-slow">
            ⚙️
          </div>
          <div className="absolute -bottom-10 -left-10 text-8xl text-neon-blue/10 animate-rotate">
            🎯
          </div>
        </div>
      </div>
    </section>
  );
}