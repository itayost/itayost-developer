import Button from '@/components/ui/Button';
import { CONTACT_CTAS, VALUE_PROPS } from '@/lib/constants';
import Link from 'next/link';

export default function AboutCTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title font-bold tracking-micro mb-6">
            בואו ניצור משהו מדהים יחד
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            מוכנים להפוך את הרעיון שלכם למציאות?
            <br />
            אני כאן כדי לעזור
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="btn-primary text-lg px-8 py-4 shadow-soft-lg hover-lift"
            >
              <span className="ml-2">📞</span>
              בואו נדבר
            </a>
            
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="text-lg hover-lift"
              >
                שלח הודעה
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8">
            {Object.values(VALUE_PROPS).slice(0, 3).map((prop, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-text-tertiary">
                <span className="text-lg">{prop.icon}</span>
                <span>{prop.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}