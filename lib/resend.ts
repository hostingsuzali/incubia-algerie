import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const EMAIL_CONFIG = {
    from: 'Incubia Algérie <onboarding@resend.dev>', // Change this to your verified domain
    to: process.env.ADMIN_EMAIL || 'contact@incuba-dz.com',
    replyTo: 'contact@incuba-dz.com',
};
