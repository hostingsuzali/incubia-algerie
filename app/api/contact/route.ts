import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/resend';
import { generateContactEmail, generateContactConfirmationEmail } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, company, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email to admin
        const adminEmail = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to: EMAIL_CONFIG.to,
            replyTo: email,
            subject: `Nouveau message de ${firstName} ${lastName}`,
            html: generateContactEmail({
                firstName,
                lastName,
                email,
                phone,
                company,
                message,
            }),
        });

        // Send confirmation email to user
        const userEmail = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to: email,
            replyTo: EMAIL_CONFIG.replyTo,
            subject: 'Merci de nous avoir contactés - Incubia Algérie',
            html: generateContactConfirmationEmail(firstName),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully',
                adminEmailId: adminEmail.data?.id,
                userEmailId: userEmail.data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
