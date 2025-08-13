'use client';

import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { featuredProject } from '@/data/portfolio';
import Link from 'next/link';
import { useState } from 'react';

export default function FeaturedProjectSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  return (
    <section className="section bg-gradient-to-br from-white via-neutral-50 to-neon-purple/5">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-black border-4 border-black shadow-brutal-lg mb-6">
              ⭐ הפרויקט המומלץ שלנו ⭐
            </div>
          </div>
          
          {/* Featured project card */}
          <Card variant="brutal" className="overflow-hidden shadow-brutal-xl">
            <div className="grid lg:grid-cols-2">
              {/* Visual showcase */}
              <div className="relative bg-gradient-to-br from-neon-purple via-neon-blue to-neon-pink p-8 lg:p-12">
                {/* Project type badge */}
                <div className="absolute top-8 right-8 z-10">
                  <span className="px-4 py-2 bg-neon-yellow text-black font-black border-4 border-black shadow-brutal">
                    {featuredProject.type}
                  </span>
                </div>
                
                {/* Main visual - simplified */}
                <div className="aspect-video bg-white/10 backdrop-blur-md border-8 border-white/20 shadow-brutal-lg flex items-center justify-center relative overflow-hidden">
                  {/* Static code background */}
                  <div className="absolute inset-0 p-6 font-mono text-xs text-neon-green/30">
                    <div>// Building amazing experiences</div>
                    <div className="mt-2">const success = true;</div>
                    <div className="mt-2">return happiness(∞);</div>
                  </div>
                  <span className="text-8xl">{featuredProject.icon}</span>
                </div>
                
                {/* Results badges */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {Object.entries(featuredProject.results).map(([key, value], idx) => (
                    <div 
                      key={key}
                      className="bg-white/90 backdrop-blur-sm p-4 border-4 border-black shadow-brutal text-center hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="text-2xl font-black text-neon-purple">{value}</div>
                      <div className="text-xs text-black font-bold">
                        {key === 'students' ? 'סטודנטים' : 
                         key === 'timeSaved' ? 'חיסכון בזמן' :
                         key === 'satisfaction' ? 'שביעות רצון' : 
                         'גידול בהכנסות'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-display font-black mb-4">
                  {featuredProject.title}
                </h2>
                <p className="text-xl text-text-secondary mb-8 font-medium">
                  {featuredProject.subtitle}
                </p>
                
                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                  {['overview', 'features', 'tech'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 font-black border-4 border-black transition-all duration-300 ${
                        activeTab === tab 
                          ? 'bg-neon-yellow shadow-brutal-md -translate-y-1' 
                          : 'bg-white hover:shadow-brutal'
                      }`}
                    >
                      {tab === 'overview' ? 'סקירה' : 
                       tab === 'features' ? 'פיצ׳רים' : 
                       'טכנולוגיות'}
                    </button>
                  ))}
                </div>
                
                {/* Tab content */}
                <div className="mb-8">
                  {activeTab === 'overview' && (
                    <p className="text-lg leading-relaxed">
                      {featuredProject.overview}
                    </p>
                  )}
                  
                  {activeTab === 'features' && (
                    <ul className="space-y-3">
                      {featuredProject.features.map((feature, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-3 transition-all duration-200"
                          onMouseEnter={() => setHoveredFeature(idx)}
                          onMouseLeave={() => setHoveredFeature(null)}
                          style={{
                            transform: hoveredFeature === idx ? 'translateX(5px)' : 'translateX(0)'
                          }}
                        >
                          <span className="text-neon-green font-black text-xl">✓</span>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {activeTab === 'tech' && (
                    <div className="flex flex-wrap gap-3">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold border-2 border-black shadow-brutal hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* CTA */}
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button variant="brutal" size="lg" className="font-black">
                      רוצה פרויקט דומה? →
                    </Button>
                  </Link>
                  <Link href={featuredProject.link || '#'}>
                    <Button variant="outline" size="lg">
                      בקר באתר ↗
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}