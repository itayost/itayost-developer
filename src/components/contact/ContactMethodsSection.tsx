import ContactForm from '@/components/common/ContactForm';
import { Card, CardContent } from '@/components/ui/Card';
import { officeHours, responseTime } from '@/data/contact';
import { CONTACT_CTAS } from '@/lib/constants';

export default function ContactMethodsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact Card */}
              <Card className="card-premium">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">דרכי יצירת קשר</h3>
                  
                  <div className="space-y-4">
                    {/* Phone */}
                    <a 
                      href={CONTACT_CTAS.PHONE.href}
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-12 h-12 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                        📞
                      </div>
                      <div>
                        <p className="font-medium text-text-primary group-hover:text-primary-600 transition-colors">
                          טלפון
                        </p>
                        <p className="text-sm text-text-secondary">
                          054-4994417
                        </p>
                      </div>
                    </a>
                    
                    {/* Email */}
                    <a 
                      href={CONTACT_CTAS.EMAIL.href}
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-12 h-12 bg-primary-50 rounded-smooth flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                        ✉️
                      </div>
                      <div>
                        <p className="font-medium text-text-primary group-hover:text-primary-600 transition-colors">
                          אימייל
                        </p>
                        <p className="text-sm text-text-secondary">
                          itayost1@gmail.com
                        </p>
                      </div>
                    </a>
                    
                    {/* WhatsApp */}
                    <a 
                      href={CONTACT_CTAS.WHATSAPP.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-12 h-12 bg-green-50 rounded-smooth flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-green-100 transition-colors">
                        💬
                      </div>
                      <div>
                        <p className="font-medium text-text-primary group-hover:text-green-600 transition-colors">
                          WhatsApp
                        </p>
                        <p className="text-sm text-text-secondary">
                          הודעה ישירה
                        </p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Response Time */}
              <Card className="card-modern bg-primary-50 border-primary-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <h3 className="font-semibold mb-1">זמן תגובה</h3>
                      <p className="text-sm text-text-secondary">
                        תוך {responseTime.general}
                      </p>
                      <p className="text-xs text-text-tertiary mt-1">
                        {responseTime.urgent}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Office Hours */}
              <Card className="card-modern">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">שעות פעילות</h3>
                  <div className="space-y-2 text-sm">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-text-secondary">{schedule.days}</span>
                        <span className={`font-medium ${!schedule.isOpen ? 'text-text-tertiary' : ''}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}