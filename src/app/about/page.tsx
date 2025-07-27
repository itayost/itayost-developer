import { generateSEO } from '@/components/common/SEO';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { CONTACT_CTAS, VALUE_PROPS } from '@/lib/constants';
import Link from 'next/link';

export const metadata = generateSEO({
  title: 'אודות ItayOst | סיפור של תשוקה לטכנולוגיה ופתרונות דיגיטליים',
  description: 'הכירו את ItayOst - מפתח פתרונות דיגיטליים עם ניסיון של 5 שנים בפיתוח אתרים, אפליקציות ומערכות לעסקים.',
  keywords: ['אודות', 'ItayOst', 'פיתוח אתרים', 'סיפור אישי', 'ניסיון'],
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-background-secondary to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-display md:text-headline font-bold tracking-micro mb-6 animate-fade-up">
                הסיפור מאחורי 
                <span className="gradient-text"> ItayOst</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed animate-fade-up" style={{ animationDelay: '100ms' }}>
                מהרעיון הראשון ועד להפיכה לשותף הדיגיטלי של עשרות עסקים ישראליים
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image Placeholder */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-elegant shadow-soft-lg mb-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl opacity-20">👨‍💻</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">איתי אוסט</h2>
                    <p className="text-text-secondary">מייסד ומפתח ראשי</p>
                  </div>
                </div>
              </div>
              
              {/* Story Content */}
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  שלום, אני איתי. כבר מגיל צעיר משכו אותי מחשבים וטכנולוגיה. 
                  מה שהתחיל כסקרנות ילדותית הפך עם השנים לתשוקה אמיתית לפיתוח פתרונות דיגיטליים.
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  לאחר שנים של עבודה בחברות הייטק גדולות, הבנתי שהידע והניסיון שצברתי יכולים 
                  לעזור לעסקים קטנים ובינוניים להצליח בעולם הדיגיטלי. כך נולדה ItayOst.
                </p>
                
                <blockquote className="border-r-4 border-primary-500 pr-6 my-8">
                  <p className="text-xl text-text-primary font-medium italic">
                    "המטרה שלי פשוטה - להנגיש טכנולוגיה מתקדמת לכל עסק, 
                    במחיר הוגן ועם יחס אישי שאי אפשר למצוא בחברות הגדולות"
                  </p>
                </blockquote>
                
                <h3 className="text-2xl font-semibold mb-4 mt-8">הדרך שעברתי</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                      '15
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">ההתחלה</h4>
                      <p className="text-text-secondary">
                        בניתי את האתר הראשון שלי בגיל 15. זה היה פשוט, אבל זה הצית את האהבה שלי לקוד.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                      '18
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">הצבא</h4>
                      <p className="text-text-secondary">
                        שירתתי ביחידה טכנולוגית ולמדתי את החשיבות של פתרונות אמינים ומאובטחים.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                      '21
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">עולם ההייטק</h4>
                      <p className="text-text-secondary">
                        עבדתי בחברות סטארטאפ וצברתי ניסיון בטכנולוגיות המתקדמות ביותר.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                      '23
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">ItayOst</h4>
                      <p className="text-text-secondary">
                        הקמתי את החברה כדי לעזור לעסקים ישראליים להצליח בעידן הדיגיטלי.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-background-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-title font-bold tracking-micro mb-4">
                הערכים שמנחים אותי
              </h2>
              <p className="text-lg text-text-secondary">
                עקרונות העבודה שעומדים מאחורי כל פרויקט
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="card-premium hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-50 rounded-smooth flex items-center justify-center text-3xl mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-text-secondary">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-title font-bold tracking-micro mb-4">
                במספרים
              </h2>
              <p className="text-lg text-text-secondary">
                תוצאות שמדברות בעד עצמן
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tech */}
      <section className="section bg-text-primary text-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-title font-bold tracking-micro mb-4">
                טכנולוגיות וכלים
              </h2>
              <p className="text-lg text-white/80">
                עובד עם הטכנולוגיות המתקדמות ביותר כדי להבטיח תוצאות מעולות
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-smooth p-6 text-center hover:bg-white/15 transition-colors animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h4 className="font-medium mb-1">{tech.name}</h4>
                  <p className="text-sm text-white/60">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-title font-bold tracking-micro mb-6">
              בואו ניצור משהו מדהים יחד
            </h2>
            <p className="text-xl text-text-secondary mb-10">
              מוכנים להפוך את הרעיון שלכם למציאות? אני כאן כדי לעזור
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
    </>
  );
}

// Data
const values = [
  {
    icon: '🎯',
    title: 'מיקוד בתוצאות',
    description: 'כל פרויקט מתחיל ומסתיים במטרה ברורה - להביא ערך אמיתי לעסק שלך.',
  },
  {
    icon: '💎',
    title: 'איכות ללא פשרות',
    description: 'קוד נקי, עיצוב מדויק וחוויית משתמש מושלמת - בכל פרויקט, גדול כקטן.',
  },
  {
    icon: '🤝',
    title: 'שקיפות מלאה',
    description: 'תקשורת פתוחה, עדכונים שוטפים ומחירים ברורים - בלי הפתעות.',
  },
  {
    icon: '🚀',
    title: 'חדשנות מתמדת',
    description: 'תמיד מעודכן בטכנולוגיות החדשות כדי לתת לך יתרון על המתחרים.',
  },
];

const stats = [
  {
    value: '50+',
    label: 'לקוחות מרוצים',
  },
  {
    value: '120+',
    label: 'פרויקטים הושלמו',
  },
  {
    value: '98%',
    label: 'שביעות רצון',
  },
  {
    value: '5',
    label: 'שנות ניסיון',
  },
];

const technologies = [
  { icon: '⚛️', name: 'React', category: 'Frontend' },
  { icon: '📱', name: 'React Native', category: 'Mobile' },
  { icon: '🟩', name: 'Node.js', category: 'Backend' },
  { icon: '🗄️', name: 'MongoDB', category: 'Database' },
  { icon: '🎨', name: 'Figma', category: 'Design' },
  { icon: '☁️', name: 'AWS', category: 'Cloud' },
  { icon: '🔧', name: 'TypeScript', category: 'Language' },
  { icon: '🚀', name: 'Next.js', category: 'Framework' },
];