'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Toast from '@/components/ui/Toast';
import { ContactFormData, contactFormSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setToast({
          message: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.',
          type: 'success',
        });
        reset();
      } else {
        throw new Error(result.error || 'שגיאה בשליחת ההודעה');
      }
    } catch (error) {
      setToast({
        message: error instanceof Error ? error.message : 'שגיאה בשליחת ההודעה',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="card-premium mx-auto w-full">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold tracking-micro mb-3">
            נשמח לשמוע ממך
          </CardTitle>
          <p className="text-lg text-text-secondary">
            מלא את הפרטים ונחזור אליך תוך 24 שעות
          </p>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Input
                  id="name"
                  label="שם מלא"
                  placeholder="ישראל ישראלי"
                  error={errors.name?.message}
                  {...register('name')}
                  disabled={isSubmitting}
                  className="input-modern"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  id="email"
                  label="אימייל"
                  type="email"
                  placeholder="example@email.com"
                  dir="ltr"
                  error={errors.email?.message}
                  {...register('email')}
                  disabled={isSubmitting}
                  className="input-modern"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Input
                  id="phone"
                  label="טלפון"
                  type="tel"
                  placeholder="050-1234567"
                  dir="ltr"
                  error={errors.phone?.message}
                  {...register('phone')}
                  disabled={isSubmitting}
                  className="input-modern"
                />
              </div>
              
              <div className="space-y-2">
                <Input
                  id="subject"
                  label="נושא הפנייה"
                  placeholder="באיזה נושא תרצו לדבר?"
                  error={errors.subject?.message}
                  {...register('subject')}
                  disabled={isSubmitting}
                  className="input-modern"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Textarea
                id="message"
                label="הודעה"
                placeholder="ספרו לנו על הפרויקט שלכם, מה האתגרים שאתם מתמודדים איתם, ואיך נוכל לעזור..."
                rows={6}
                error={errors.message?.message}
                {...register('message')}
                disabled={isSubmitting}
                className="input-modern resize-none"
                required
              />
            </div>

            {/* Service Interest (optional) */}
            <div className="bg-background-secondary rounded-smooth p-4">
              <p className="text-sm font-medium text-text-primary mb-3">
                באילו שירותים אתם מתעניינים?
              </p>
              <div className="flex flex-wrap gap-3">
                {['אתר חדש', 'אפליקציה', 'מערכת ניהול', 'שדרוג אתר קיים', 'ייעוץ'].map((service) => (
                  <label 
                    key={service}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200 hover:border-primary-500 transition-colors cursor-pointer"
                  >
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      disabled={isSubmitting}
                    />
                    <span className="text-sm text-text-secondary">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                size="lg"
                className="w-full btn-primary shadow-soft-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    שולח את ההודעה...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    שלח הודעה
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </Button>
              
              <p className="text-center text-sm text-text-tertiary">
                על ידי שליחת הטופס אתם מאשרים שקראתם את{' '}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                  מדיניות הפרטיות
                </a>{' '}
                שלנו
              </p>
            </div>
          </form>
        </CardContent>
      </Card>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}