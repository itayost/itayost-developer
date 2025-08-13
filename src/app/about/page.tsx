import AboutCTASection from '@/components/about/AboutCTASection';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import PersonalStorySection from '@/components/about/PersonalStorySection';
import SkillsSection from '@/components/about/SkillsSection';
import StatsSection from '@/components/about/StatsSection';
import ValuesSection from '@/components/about/ValuesSection';
import { generateSEO } from '@/components/common/SEO';

export const metadata = generateSEO({
  title: 'אודות ItayOst | סיפור של תשוקה לטכנולוגיה ופתרונות דיגיטליים',
  description: 'הכירו את ItayOst - מפתח פתרונות דיגיטליים עם ניסיון של 5 שנים בפיתוח אתרים, אפליקציות ומערכות לעסקים.',
  keywords: ['אודות', 'ItayOst', 'פיתוח אתרים', 'סיפור אישי', 'ניסיון'],
});

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <PersonalStorySection />
      <ValuesSection />
      <StatsSection />
      <SkillsSection />
      <AboutCTASection />
    </>
  );
}