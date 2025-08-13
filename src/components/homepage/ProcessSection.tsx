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
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step card */}
                  <div className={`relative bg-white border-4 border-black shadow-brutal p-6 transform hover:shadow-brutal-lg hover:-translate-y-2 transition-all duration-300 hover:rotate-${index % 2 === 0 ? '1' : '-1'}`}>
                    {/* Step number - brutal badge */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${step.color} text-black border-4 border-black shadow-brutal flex items-center justify-center text-xl font-black animate-pulse`}>
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-5xl mb-4 animate-bounce-in">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-black text-xl mb-2 text-black">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-medium">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <div className="text-4xl text-black animate-bounce">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Note */}
          <div className="text-center mt-16">
            <div className="inline-block p-4 bg-neon-yellow text-black border-4 border-black shadow-brutal font-black">
              כל פרויקט מקבל יחס VIP 👑
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}