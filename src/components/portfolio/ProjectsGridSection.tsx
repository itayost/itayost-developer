'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { projects } from '@/data/portfolio';
import { useState } from 'react';

export default function ProjectsGridSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  
  const types = ['all', 'E-Commerce', 'Mobile App', 'Business System', 'Corporate Site'];
  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(p => p.type === selectedType);
  
  return (
    <section className="section bg-gradient-to-br from-neutral-100 via-white to-neon-yellow/5">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-8 py-3 bg-neon-green text-black font-black border-4 border-black shadow-brutal-lg mb-6 rotate-2 animate-wiggle">
            🚀 עוד פרויקטים מטורפים
          </div>
          
          <h2 className="text-display font-black mb-6">
            <span className="gradient-text-fire">מגוון פתרונות</span>
            <span className="block text-4xl text-text-primary mt-2">לכל סוג של עסק</span>
          </h2>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 font-black border-4 border-black transition-all duration-300 ${
                selectedType === type 
                  ? 'bg-neon-yellow shadow-brutal-md scale-110 -rotate-2' 
                  : 'bg-white hover:shadow-brutal hover:scale-105'
              }`}
            >
              {type === 'all' ? 'הכל' : type}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              variant={index % 3 === 0 ? 'brutal' : index % 3 === 1 ? 'neon' : 'glass'}
              className={`group cursor-pointer transition-all duration-500 overflow-hidden ${
                hoveredProject === project.id ? 'scale-105 z-10' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                transform: `rotate(${index % 4 === 0 ? -2 : index % 4 === 1 ? 2 : index % 4 === 2 ? -1 : 1}deg)`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project visual */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 pattern-dots opacity-10" />
                
                {/* Project icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-8xl transition-all duration-300 ${
                    hoveredProject === project.id ? 'scale-125 rotate-12' : ''
                  }`}>
                    {project.icon}
                  </span>
                </div>
                
                {/* Type badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black font-bold text-xs border-2 border-black shadow-brutal">
                    {project.type}
                  </span>
                </div>
                
                {/* Results badge (if exists) */}
                {project.results && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-neon-yellow text-black font-black text-xs border-2 border-black shadow-brutal rotate-2">
                      {project.results}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-2xl font-black mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-4 font-medium">
                  {project.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2 text-sm"
                      style={{
                        opacity: hoveredProject === project.id ? 1 : 0.7,
                        transform: hoveredProject === project.id ? 'translateX(5px)' : 'translateX(0)',
                        transition: `all 0.3s ease ${idx * 50}ms`
                      }}
                    >
                      <span className="text-neon-green font-black">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Hover indicator */}
                {hoveredProject === project.id && (
                  <div className="mt-4 text-sm font-black text-neon-purple animate-pulse">
                    לחץ לפרטים נוספים ←
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
