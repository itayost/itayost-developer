import AboutCTASection from '@/components/about/AboutCTASection';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import PersonalStorySection from '@/components/about/PersonalStorySection';
import SkillsSection from '@/components/about/SkillsSection';
import StatsSection from '@/components/about/StatsSection';
import ValuesSection from '@/components/about/ValuesSection';
import { generateSEO } from '@/components/common/SEO';

export const metadata = generateSEO({
  title: 'אודות ItayOst | הסיפור מאחורי הקוד',
  description: 'הכירו את איתי אוסט - מפתח עם תשוקה אמיתית לטכנולוגיה, 5+ שנות ניסיון ומעל 200 פרויקטים מוצלחים.',
  keywords: ['אודות', 'איתי אוסט', 'ItayOst', 'פיתוח אתרים', 'סיפור אישי', 'ניסיון'],
});

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHeroSection />
      <PersonalStorySection />
      <ValuesSection />
      <StatsSection />
      <SkillsSection />
      <AboutCTASection />
    </main>
  );
}