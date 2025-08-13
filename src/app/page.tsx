import { generateSEO } from '@/components/common/SEO';
import { CaseStudySection } from '@/components/homepage/CaseStudySection';
import { ContactCTASection } from '@/components/homepage/ContactCTASection';
import HeroSection from '@/components/homepage/HeroSection';
import { ProcessSection } from '@/components/homepage/ProcessSection';
import ServicesSection from '@/components/homepage/ServicesSection';
import { ValuePropsSection } from '@/components/homepage/ValuePropsSection';

export const metadata = generateSEO({
  title: 'ItayOst - פתרונות דיגיטליים שמדברים בקול רם | אתרים, אפליקציות ומערכות',
  description: 'פתרונות דיגיטליים מטורפים לעסקים שרוצים להתבלט. אתרים שמוכרים, אפליקציות שמכורות, ומערכות שחוסכות זמן. מחירים הוגנים, יחס אישי, תוצאות מטורפות.',
  keywords: ['פיתוח אתרים', 'אפליקציות עסקיות', 'מערכות ניהול', 'אתרים לעסקים', 'פתרונות דיגיטליים', 'עיצוב נועז', 'חדשנות דיגיטלית'],
});

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Bold Hero with animations and effects */}
      <HeroSection />
      
      {/* BentoGrid Services Layout */}
      <ServicesSection />
      
      {/* Animated Value Props with dark theme */}
      <ValuePropsSection />
      
      {/* Dramatic Case Study */}
      <CaseStudySection />
      
      {/* Neo-brutalist Process Timeline */}
      <ProcessSection />
      
      {/* Bold Contact CTA with multiple options */}
      <ContactCTASection />
    </main>
  );
}