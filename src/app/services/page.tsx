import { generateSEO } from '@/components/common/SEO';
import BusinessSystemsSection from '@/components/services/BusinessSystemsSection';
import MobileAppsSection from '@/components/services/MobileAppsSection';
import PricingSection from '@/components/services/PricingSection';
import ServicesCTASection from '@/components/services/ServicesCTASection';
import ServicesHeroSection from '@/components/services/ServicesHeroSection';
import ServicesProcessSection from '@/components/services/ServicesProcessSection';
import WebDevelopmentSection from '@/components/services/WebDevelopmentSection';

export const metadata = generateSEO({
  title: 'השירותים שלנו | ItayOst - פיתוח אתרים, אפליקציות ומערכות',
  description: 'שירותי פיתוח דיגיטלי מקצועיים - אתרים מודרניים, אפליקציות מותאמות אישית ומערכות ניהול חכמות לעסקים.',
  keywords: ['פיתוח אתרים', 'אפליקציות מובייל', 'מערכות ניהול', 'CRM', 'אוטומציה עסקית'],
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      
      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <WebDevelopmentSection />
          <MobileAppsSection />
          <BusinessSystemsSection />
        </div>
      </section>

      <ServicesProcessSection />
      <PricingSection />
      <ServicesCTASection />
    </>
  );
}