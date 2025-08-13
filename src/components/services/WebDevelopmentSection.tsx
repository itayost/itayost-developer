import Button from '@/components/ui/Button';
import { webDevelopmentFeatures } from '@/data/services';
import Link from 'next/link';

export default function WebDevelopmentSection() {
  return (
    <div id="websites" className="mb-24 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="badge badge-primary mb-4">השירות הפופולרי ביותר</div>
          <h2 className="text-title font-bold tracking-micro mb-6">
            פיתוח אתרים מודרניים
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            אתרים שלא רק נראים טוב, אלא גם עובדים בצורה מושלמת. 
            כל אתר נבנה עם טכנולוגיות מתקדמות, מותאם למובייל ומאופטם למנועי חיפוש.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {webDevelopmentFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-xl">{feature.icon}</span>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-text-tertiary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/contact">
            <Button className="btn-primary">בואו נתחיל את הפרויקט שלכם</Button>
          </Link>
        </div>
        
        {/* Placeholder for visual */}
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100 rounded-elegant shadow-soft-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-30">🌐</div>
                <p className="text-text-tertiary">דוגמת אתר</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent-100 rounded-full opacity-20 blur-3xl" />
        </div>
      </div>
    </div>
  );
}