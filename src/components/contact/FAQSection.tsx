import { Card, CardContent } from '@/components/ui/Card';
import { faqs } from '@/data/contact';

export default function FAQSection() {
  return (
    <section className="section bg-background-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-title font-bold tracking-micro mb-4">
              שאלות נפוצות
            </h2>
            <p className="text-lg text-text-secondary">
              תשובות לשאלות שאנחנו שומעים הרבה
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="card-modern hover:shadow-soft-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}