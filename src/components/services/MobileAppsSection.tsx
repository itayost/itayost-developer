import Button from '@/components/ui/Button';
import { mobilePlatforms } from '@/data/services';
import Link from 'next/link';

export default function MobileAppsSection() {
  return (
    <div id="apps" className="mb-24 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Placeholder for visual */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gradient-to-br from-accent-50 to-accent-100 rounded-elegant shadow-soft-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-30">📱</div>
                <p className="text-text-tertiary">דוגמת אפליקציה</p>
              </div>
            </div>
          </div>
          
          {/* Floating app icons */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-soft-lg flex items-center justify-center text-3xl animate-float">
            🍎
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-soft-lg flex items-center justify-center text-3xl animate-float" style={{ animationDelay: '1s' }}>
            🤖
          </div>
        </div>
        
        <div>
          <h2 className="text-title font-bold tracking-micro mb-6">
            אפליקציות שמשנות חוויה
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            פתרונות שמשלבים חוויית משתמש מעולה עם ביצועים מרשימים.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {mobilePlatforms.map((platform, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-background-secondary rounded-smooth animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{platform.icon}</div>
                <h4 className="font-semibold mb-1">{platform.name}</h4>
                <p className="text-sm text-text-tertiary">{platform.technologies}</p>
              </div>
            ))}
          </div>
          
          <Link href="/contact">
            <Button className="btn-primary">התחל פרויקט אפליקציה</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}