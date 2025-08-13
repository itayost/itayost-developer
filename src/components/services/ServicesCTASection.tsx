import Button from '@/components/ui/Button';
import { CONTACT_CTAS } from '@/lib/constants';
import Link from 'next/link';

export default function ServicesCTASection() {
  return (
    <section className="section bg-text-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title font-bold tracking-micro mb-6">
            לא בטוחים איזה שירות מתאים לכם?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            נשמח לשמוע על הפרויקט שלכם ולייעץ על הפתרון המתאים ביותר
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_CTAS.PHONE.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text-primary font-medium rounded-smooth hover:bg-neutral-100 transition-colors"
            >
              <span className="text-xl">📞</span>
              קבל ייעוץ בטלפון
            </a>
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20"
              >
                שלח פרטי הפרויקט
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}