import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/resend';
import { generateFormationBookingEmail, generateFormationConfirmationEmail } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            firstName,
            lastName,
            email,
            phone,
            company,
            formation,
            experience,
            objectives,
            availability
        } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !formation || !experience || !objectives || !availability) {
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
            subject: `Nouvelle demande de formation: ${formation} - ${firstName} ${lastName}`,
            html: generateFormationBookingEmail({
                firstName,
                lastName,
                email,
                phone,
                company,
                formation,
                experience,
                objectives,
                availability,
            }),
        });

        // Send confirmation email to user
        const userEmail = await resend.emails.send({
            from: EMAIL_CONFIG.from,
            to: email,
            replyTo: EMAIL_CONFIG.replyTo,
            subject: `Demande de formation reçue: ${formation} - Incubia Algérie`,
            html: generateFormationConfirmationEmail(firstName, formation),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Formation booking email sent successfully',
                adminEmailId: adminEmail.data?.id,
                userEmailId: userEmail.data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending formation booking email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
