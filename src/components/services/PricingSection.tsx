import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { pricingPlans } from '@/data/services';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-title font-bold tracking-micro mb-4">
            חבילות ומחירים
          </h2>
          <p className="text-lg text-text-secondary">
            פתרונות גמישים המותאמים לכל תקציב
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.featured 
                  ? 'border-primary-500 shadow-soft-xl scale-105' 
                  : 'border-neutral-200'
              } hover-lift animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                  מומלץ
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-text-tertiary text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-text-tertiary">₪</span>
                  <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                  <span className="text-sm text-text-tertiary">/פרויקט</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="block">
                  <Button 
                    className={`w-full ${
                      plan.featured 
                        ? 'btn-primary' 
                        : 'bg-neutral-100 text-text-primary hover:bg-neutral-200'
                    }`}
                  >
                    בחר חבילה
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-text-tertiary mt-8">
          * המחירים הם הערכה בלבד. ניתן להתאים חבילות אישיות לפי דרישה.
        </p>
      </div>
    </section>
  );
}