import { locationInfo } from '@/data/contact';

export default function LocationSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-title font-bold tracking-micro mb-6">
                {locationInfo.title}
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                {locationInfo.description}
              </p>
              
              <div className="space-y-4">
                {locationInfo.details.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-background-secondary rounded-smooth flex items-center justify-center text-2xl flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{detail.title}</h3>
                      <p className="text-sm text-text-secondary">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative h-[400px] bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-elegant overflow-hidden shadow-soft-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-20">🗺️</div>
                  <p className="text-text-tertiary">מפה אינטראקטיבית</p>
                  <p className="text-sm text-text-tertiary mt-2">אפשר להוסיף Google Maps</p>
                </div>
              </div>
              
              {/* Decorative pin */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-500 rounded-full shadow-soft-lg flex items-center justify-center text-white text-2xl animate-bounce-slow">
                    📍
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-6 bg-primary-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}