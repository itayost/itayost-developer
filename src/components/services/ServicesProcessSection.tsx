import { servicesProcessSteps } from '@/data/services';

export default function ServicesProcessSection() {
  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-title font-bold tracking-micro mb-4">
            איך אנחנו עובדים?
          </h2>
          <p className="text-lg text-text-secondary">
            תהליך מסודר ושקוף מתחילת הפרויקט ועד ההשקה
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {servicesProcessSteps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-soft-md flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}