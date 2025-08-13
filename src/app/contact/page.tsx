import { generateSEO } from '@/components/common/SEO';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactMethodsSection from '@/components/contact/ContactMethodsSection';
import FAQSection from '@/components/contact/FAQSection';
import LocationSection from '@/components/contact/LocationSection';

export const metadata = generateSEO({
  title: 'צור קשר | ItayOst - נשמח לשמוע ממך',
  description: 'צור קשר עם ItayOst לייעוץ חינם על פתרונות דיגיטליים לעסק שלך. טלפון, אימייל או טופס יצירת קשר.',
  keywords: ['צור קשר', 'ייעוץ חינם', 'פגישה', 'הצעת מחיר'],
});

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactMethodsSection />
      <FAQSection />
      <LocationSection />
    </>
  );
}