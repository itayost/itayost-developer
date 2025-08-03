import { VALUE_PROPS } from '@/lib/constants';

export default function ValuePropsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-title font-bold tracking-micro mb-8">
                למה לבחור ב-
                <span className="gradient-text">ItayOst</span>?
              </h2>
              <div className="space-y-6">
                {Object.values(VALUE_PROPS).map((prop, index) => (
                  <div 
                    key={prop.title}
                    className="flex gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl">
                      {prop.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {prop.title}
                      </h3>
                      <p className="text-text-secondary">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Placeholder for image/graphic */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-elegant shadow-soft-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 opacity-20">🏆</div>
                    <p className="text-text-tertiary">תמונה / גרפיקה</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-100 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}