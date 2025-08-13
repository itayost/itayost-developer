export default function ContactHeroSection() {
  return (
    <section className="section bg-gradient-to-b from-background-secondary to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft" />
            זמינים עבורכם
          </div>
          
          <h1 className="text-display md:text-headline font-bold tracking-micro mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            בואו נתחיל 
            <span className="gradient-text"> משהו מדהים</span>
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            יש לכם רעיון? שאלה? צריכים ייעוץ? אנחנו כאן בשבילכם
          </p>
        </div>
      </div>
    </section>
  );
}