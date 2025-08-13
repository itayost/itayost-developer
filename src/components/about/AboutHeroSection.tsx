export default function AboutHeroSection() {
  return (
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
  );
}