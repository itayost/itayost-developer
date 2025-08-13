import ContactForm from '@/components/common/ContactForm';
import { Card, CardContent } from '@/components/ui/Card';
import { officeHours, responseTime } from '@/data/contact';
import { CONTACT_CTAS } from '@/lib/constants';

export default function ContactMethodsSection() {
  return (
    <section className="section bg-gradient-to-br from-white via-neutral-50 to-neon-purple/5">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact Card */}
              <Card variant="brutal" className="border-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-black mb-6">דרכי יצירת קשר</h3>
                  
                  <div className="space-y-4">
                    {/* Phone */}
                    <a 
                      href={CONTACT_CTAS.PHONE.href}
                      className="flex items-start gap-4 group p-3 border-2 border-black bg-white hover:bg-neon-yellow hover:shadow-brutal transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-green border-4 border-black shadow-brutal flex items-center justify-center text-2xl flex-shrink-0 font-black">
                        📞
                      </div>
                      <div>
                        <p className="font-black text-text-primary">
                          טלפון
                        </p>
                        <p className="text-sm text-text-secondary font-bold">
                          054-4994417
                        </p>
                      </div>
                    </a>
                    
                    {/* Email */}
                    <a 
                      href={CONTACT_CTAS.EMAIL.href}
                      className="flex items-start gap-4 group p-3 border-2 border-black bg-white hover:bg-neon-blue hover:text-white hover:shadow-brutal transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-neon-purple text-white border-4 border-black shadow-brutal flex items-center justify-center text-2xl flex-shrink-0 font-black">
                        ✉️
                      </div>
                      <div>
                        <p className="font-black">
                          אימייל
                        </p>
                        <p className="text-sm font-bold">
                          itayost1@gmail.com
                        </p>
                      </div>
                    </a>
                    
                    {/* WhatsApp */}
                    <a 
                      href={CONTACT_CTAS.WHATSAPP.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group p-3 border-2 border-black bg-white hover:bg-green-400 hover:shadow-brutal transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-green-500 text-white border-4 border-black shadow-brutal flex items-center justify-center text-2xl flex-shrink-0 font-black">
                        💬
                      </div>
                      <div>
                        <p className="font-black">
                          WhatsApp
                        </p>
                        <p className="text-sm font-bold">
                          הודעה ישירה
                        </p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Response Time */}
              <Card variant="neon" className="bg-gradient-to-br from-neon-yellow to-neon-green border-4 border-black">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">⏱️</span>
                    <div>
                      <h3 className="font-black text-lg mb-2">זמן תגובה</h3>
                      <p className="text-base font-bold">
                        תוך {responseTime.general}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        {responseTime.urgent}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Office Hours */}
              <Card variant="glass" className="border-4 border-black bg-white/90">
                <CardContent className="p-6">
                  <h3 className="font-black text-lg mb-4">שעות פעילות</h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between p-2 hover:bg-neon-purple/10 transition-colors">
                        <span className="font-bold">{schedule.days}</span>
                        <span className={`font-black ${!schedule.isOpen ? 'text-text-tertiary' : 'text-neon-green'}`}>
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