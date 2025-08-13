import { generateSEO } from '@/components/common/SEO';
import FeaturedProjectSection from '@/components/portfolio/FeaturedProjectSection';
import PortfolioCTASection from '@/components/portfolio/PortfolioCTASection';
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import ProjectsGridSection from '@/components/portfolio/ProjectsGridSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';

export const metadata = generateSEO({
  title: 'תיק עבודות | ItayOst - פרויקטים מטורפים שעשינו',
  description: 'צפו בפרויקטים המטורפים שלנו - אתרים שמוכרים, אפליקציות שמכורות ומערכות שחוסכות זמן וכסף.',
  keywords: ['תיק עבודות', 'פרויקטים', 'דוגמאות', 'הצלחות', 'לקוחות מרוצים'],
});

export default function PortfolioPage() {
  return (
    <main className="overflow-x-hidden">
      <PortfolioHeroSection />
      <FeaturedProjectSection />
      <ProjectsGridSection />
      <TestimonialsSection />
      <PortfolioCTASection />
    </main>
  );
}