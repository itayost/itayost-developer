import { technologies } from '@/data/about';

export default function SkillsSection() {
  return (
    <section className="section bg-text-primary text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              טכנולוגיות וכלים
            </h2>
            <p className="text-lg text-white/80">
              עובד עם הטכנולוגיות המתקדמות ביותר כדי להבטיח תוצאות מעולות
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-smooth p-6 text-center hover:bg-white/15 transition-colors animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h4 className="font-medium mb-1">{tech.name}</h4>
                <p className="text-sm text-white/60">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}