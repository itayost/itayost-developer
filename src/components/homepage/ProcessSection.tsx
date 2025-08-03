export default function ProcessSection() {
  const processSteps = [
    {
      icon: '💬',
      title: 'הבנת הצורך',
      description: 'פגישת ייעוץ חינמית להבנת הדרישות והיעדים העסקיים',
    },
    {
      icon: '📋',
      title: 'תכנון מפורט',
      description: 'הכנת אפיון מלא ועיצוב ראשוני לאישורכם',
    },
    {
      icon: '🚀',
      title: 'פיתוח ובדיקות',
      description: 'בניית הפתרון עם עדכונים שוטפים ובדיקות יסודיות',
    },
    {
      icon: '🎉',
      title: 'השקה ותמיכה',
      description: 'העלאה לאוויר, הדרכה מלאה ותמיכה שוטפת',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-title font-bold tracking-micro mb-4">
              התהליך שלנו
            </h2>
            <p className="text-lg text-text-secondary">
              ארבעה שלבים פשוטים מהרעיון למציאות
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            
            <div className="grid md:grid-cols-4 gap-8 md:gap-4">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="relative text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-soft-md flex items-center justify-center text-3xl relative z-10">
                      {step.icon}
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                  
                  {/* Arrow for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <div className="text-2xl text-neutral-300">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-text-tertiary">
              כל פרויקט מקבל יחס אישי ומותאם לצרכים הספציפיים של העסק
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}