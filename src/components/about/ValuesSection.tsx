import { Card, CardContent } from '@/components/ui/Card';
import { values } from '@/data/about';

export default function ValuesSection() {
  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              הערכים שמנחים אותי
            </h2>
            <p className="text-lg text-text-secondary">
              עקרונות העבודה שעומדים מאחורי כל פרויקט
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="card-premium hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-50 rounded-smooth flex items-center justify-center text-3xl mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}