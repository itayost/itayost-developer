import { personalInfo, storyContent, timeline } from '@/data/about';

export default function PersonalStorySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image Placeholder */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-elegant shadow-soft-lg mb-6">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl opacity-20">{personalInfo.profileEmoji}</span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">{personalInfo.name}</h2>
                  <p className="text-text-secondary">{personalInfo.title}</p>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6 animate-fade-up">
                {storyContent.intro}
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
                {storyContent.journey}
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                {storyContent.mission}
              </p>
              
              <p className="text-text-secondary leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
                {storyContent.approach}
              </p>
              
              {/* Timeline */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-8">הדרך שעברתי</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 animate-fade-up"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                        {item.year}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-text-secondary">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}