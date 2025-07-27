import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'השם חייב להכיל לפחות 2 תווים')
    .max(50, 'השם לא יכול להכיל יותר מ-50 תווים'),
  
  email: z
    .string()
    .email('כתובת אימייל לא תקינה')
    .min(1, 'אימייל הוא שדה חובה'),
  
  phone: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^[\d-+().\s]+$/.test(value),
      'מספר טלפון לא תקין'
    ),
  
  subject: z
    .string()
    .min(3, 'הנושא חייב להכיל לפחות 3 תווים')
    .max(100, 'הנושא לא יכול להכיל יותר מ-100 תווים'),
  
  message: z
    .string()
    .min(10, 'ההודעה חייבת להכיל לפחות 10 תווים')
    .max(1000, 'ההודעה לא יכולה להכיל יותר מ-1000 תווים'),
});

// Infer the type from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('כתובת אימייל לא תקינה')
    .min(1, 'אימייל הוא שדה חובה'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Project inquiry schema (for more detailed forms)
export const projectInquirySchema = z.object({
  // Personal info
  name: z.string().min(2, 'השם חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().optional(),
  company: z.string().optional(),
  
  // Project details
  projectType: z.enum(['website', 'app', 'system', 'other'], {
    required_error: 'יש לבחור סוג פרויקט',
  }),
  budget: z.enum(['5k-10k', '10k-25k', '25k-50k', '50k+'], {
    required_error: 'יש לבחור טווח תקציב',
  }),
  timeline: z.enum(['asap', '1-3months', '3-6months', 'flexible'], {
    required_error: 'יש לבחור לוח זמנים',
  }),
  description: z.string().min(20, 'תיאור הפרויקט חייב להכיל לפחות 20 תווים'),
  
  // Additional services
  services: z.array(z.string()).optional(),
  howDidYouHear: z.string().optional(),
});

export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;