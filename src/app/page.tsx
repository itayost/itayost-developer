import { generateSEO } from '@/components/common/SEO';
import CaseStudySection from '@/components/homepage/CaseStudySection';
import ContactCTASection from '@/components/homepage/ContactCTASection';
import HeroSection from '@/components/homepage/HeroSection';
import ProcessSection from '@/components/homepage/ProcessSection';
import ServicesSection from '@/components/homepage/ServicesSection';
import ValuePropsSection from '@/components/homepage/ValuePropsSection';

export const metadata = generateSEO({
  title: 'ItayOst - פתרונות דיגיטליים לעסקים | אתרים, אפליקציות ומערכות',
  description: 'פתרונות דיגיטליים מתקדמים לעסקים קטנים ובינוניים. פיתוח אתרים, אפליקציות ומערכות ניהול במחירים הוגנים ויחס אישי.',
  keywords: ['פיתוח אתרים', 'אפליקציות עסקיות', 'מערכות ניהול', 'אתרים לעסקים', 'פתרונות דיגיטליים'],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValuePropsSection />
      <CaseStudySection />
      <ProcessSection />
      <ContactCTASection />
    </>
  );
}