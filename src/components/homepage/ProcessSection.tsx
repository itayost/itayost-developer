'use client';

export function ProcessSection() {
  const processSteps = [
    {
      icon: '💬',
      title: 'הבנת הצורך',
      description: 'פגישת ייעוץ חינמית להבנת הדרישות והיעדים העסקיים',
      color: 'neon-purple',
    },
    {
      icon: '📋', 
      title: 'תכנון מפורט',
      description: 'הכנת אפיון מלא ועיצוב ראשוני לאישורכם',
      color: 'neon-blue',
    },
    {
      icon: '🚀',
      title: 'פיתוח ובדיקות',
      description: 'בניית הפתרון עם עדכונים שוטפים ובדיקות יסודיות',
      color: 'neon-green',
    },
    {
      icon: '🎉',
      title: 'השקה ותמיכה',
      description: 'העלאה לאוויר, הדרכה מלאה ותמיכה שוטפת',
      color: 'neon-yellow',
    },
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display font-black mb-4">
              <span className="text-black">איך זה</span>{' '}
              <span className="gradient-text">עובד?</span>
            </h2>
            <p className="text-2xl text-text-secondary font-medium">
              ארבעה שלבים פשוטים מהרעיון למציאות
            </p>
          </div>
          
          {/* Process Steps - Bold timeline */}
          <div className="relative">
            {/* Connection line - brutal style */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-2 bg-black" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center"
                >
                  {/* Step card */}
                  <div className="relative bg-white border-4 border-black shadow-brutal p-4 sm:p-6 transform hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300">
                    {/* Step number - positioned on the line */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-black text-white flex items-center justify-center text-2xl font-black rounded-full border-4 border-white">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-5xl mb-4 mt-4">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`font-black text-xl mb-2 text-${step.color}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-xl text-text-secondary mb-6 font-medium">
              מוכנים להתחיל את המסע?
            </p>
            <a href="/contact" className="inline-flex">
              <button className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-black text-lg border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all duration-300">
                בואו נתחיל →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}