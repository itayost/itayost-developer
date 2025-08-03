import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { SERVICES } from '@/lib/constants';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              השירותים שלנו
            </h2>
            <p className="text-lg text-text-secondary">
              פתרונות מקצה לקצה שמותאמים בדיוק לצרכים של העסק שלך
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(SERVICES).map((service, index) => (
              <Link 
                key={service.id} 
                href={`/services#${service.id}`}
                className="group block"
              >
                <Card 
                  className="h-full card-premium group-hover:shadow-soft-xl transition-all duration-300 hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-50 rounded-elegant flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary-600 font-medium">
                      <span>למד עוד</span>
                      <span className="group-hover:translate-x-1 transition-transform">←</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium hover:underline"
            >
              ראה את כל השירותים שלנו
              <span>←</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}