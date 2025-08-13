import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { businessSystems } from '@/data/services';

export default function BusinessSystemsSection() {
  return (
    <div id="systems" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-title font-bold tracking-micro mb-4">
          מערכות עסקיות חכמות
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          פתרונות מותאמים אישית שחוסכים זמן, מייעלים תהליכים ומגדילים רווחים
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {businessSystems.map((system, index) => (
          <Card 
            key={index}
            className="card-premium hover-lift animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="w-14 h-14 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl mb-4">
                {system.icon}
              </div>
              <CardTitle className="text-xl">{system.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary mb-4">{system.description}</p>
              <ul className="space-y-2">
                {system.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-text-tertiary">
                    <span className="text-primary-500 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}