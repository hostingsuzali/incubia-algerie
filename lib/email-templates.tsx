interface ContactEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
}

export function generateContactEmail(props: ContactEmailProps): string {
    const { firstName, lastName, email, phone, company, message } = props;

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto;">
    <div style="background-color: #1B1AFE; padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Nouveau Message de Contact</h1>
    </div>
    
    <div style="padding: 30px;">
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #0D1F1A; margin-top: 0;">Informations du Contact</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Nom complet:</td>
            <td style="padding: 10px 0; color: #0D1F1A;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Email:</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${email}" style="color: #1B1AFE;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Téléphone:</td>
            <td style="padding: 10px 0;">
              <a href="tel:${phone}" style="color: #1B1AFE;">${phone}</a>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Entreprise/Projet:</td>
            <td style="padding: 10px 0; color: #0D1F1A;">${company}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <div style="background-color: white; padding: 20px; border-radius: 8px;">
        <h3 style="color: #0D1F1A; margin-top: 0;">Message</h3>
        <p style="color: #47534E; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>

    <div style="padding: 20px; text-align: center; color: #47534E; font-size: 12px;">
      <p>Ce message a été envoyé depuis le formulaire de contact du site Incubia Algérie</p>
    </div>
  </div>
</body>
</html>
  `;
}

interface FormationBookingEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    formation: string;
    experience: string;
    objectives: string;
    availability: string;
}

export function generateFormationBookingEmail(props: FormationBookingEmailProps): string {
    const { firstName, lastName, email, phone, company, formation, experience, objectives, availability } = props;

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto;">
    <div style="background-color: #CA9BFA; padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Nouvelle Demande de Formation</h1>
    </div>
    
    <div style="padding: 30px;">
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #0D1F1A; margin-top: 0;">Informations du Participant</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Nom complet:</td>
            <td style="padding: 10px 0; color: #0D1F1A;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Email:</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${email}" style="color: #CA9BFA;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Téléphone:</td>
            <td style="padding: 10px 0;">
              <a href="tel:${phone}" style="color: #CA9BFA;">${phone}</a>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Entreprise/Projet:</td>
            <td style="padding: 10px 0; color: #0D1F1A;">${company}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #0D1F1A; margin-top: 0;">Détails de la Formation</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Formation:</td>
            <td style="padding: 10px 0; color: #0D1F1A;">${formation}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #47534E;">Disponibilité:</td>
            <td style="padding: 10px 0; color: #0D1F1A;">${availability}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #0D1F1A; margin-top: 0;">Expérience</h3>
        <p style="color: #47534E; line-height: 1.6; white-space: pre-wrap;">${experience}</p>
      </div>

      <div style="background-color: white; padding: 20px; border-radius: 8px;">
        <h3 style="color: #0D1F1A; margin-top: 0;">Objectifs</h3>
        <p style="color: #47534E; line-height: 1.6; white-space: pre-wrap;">${objectives}</p>
      </div>
    </div>

    <div style="padding: 20px; text-align: center; color: #47534E; font-size: 12px;">
      <p>Cette demande a été envoyée depuis le formulaire de réservation de formation du site Incubia Algérie</p>
    </div>
  </div>
</body>
</html>
  `;
}

export function generateContactConfirmationEmail(firstName: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto;">
    <div style="background-color: #1B1AFE; padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Merci de nous avoir contactés !</h1>
    </div>
    
    <div style="padding: 30px;">
      <div style="background-color: white; padding: 30px; border-radius: 8px;">
        <p style="color: #0D1F1A; font-size: 16px; line-height: 1.6;">
          Bonjour ${firstName},
        </p>
        <p style="color: #47534E; font-size: 16px; line-height: 1.6;">
          Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez à Incubia Algérie.
        </p>
        <p style="color: #47534E; font-size: 16px; line-height: 1.6;">
          Notre équipe examinera votre demande et vous répondra dans les <strong>24 heures</strong>.
        </p>
        <p style="color: #47534E; font-size: 16px; line-height: 1.6;">
          En attendant, n'hésitez pas à explorer nos services et programmes sur notre site web.
        </p>
        <div style="margin-top: 30px; text-align: center;">
          <a href="https://incuba-dz.com" style="display: inline-block; padding: 12px 30px; background-color: #1B1AFE; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Visiter notre site
          </a>
        </div>
      </div>
    </div>

    <div style="padding: 20px; text-align: center; color: #47534E; font-size: 12px;">
      <p>Incubia Algérie - Votre partenaire pour l'entrepreneuriat</p>
      <p>Alger, Algérie | contact@incuba-dz.com</p>
    </div>
  </div>
</body>
</html>
  `;
}

export function generateFormationConfirmationEmail(firstName: string, formation: string): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto;">
    <div style="background-color: #CA9BFA; padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0;">Demande de Formation Reçue !</h1>
    </div>
    
    <div style="padding: 30px;">
      <div style="background-color: white; padding: 30px; border-radius: 8px;">
        <p style="color: #0D1F1A; font-size: 16px; line-height: 1.6;">
          Bonjour ${firstName},
        </p>
        <p style="color: #47534E; font-size: 16px; line-height: 1.6;">
          Nous avons bien reçu votre demande pour la formation <strong>${formation}</strong>.
        </p>
        <p style="color: #47534E; font-size: 16px; line-height: 1.6;">
          Notre équipe va examiner votre profil et vos objectifs. Nous vous contacterons dans les <strong>48 heures</strong> pour discuter des prochaines étapes et confirmer votre inscription.
        </p>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="color: #0D1F1A; margin-top: 0;">Prochaines étapes :</h3>
          <ol style="color: #47534E; line-height: 1.8;">
            <li>Examen de votre candidature</li>
            <li>Entretien téléphonique (si nécessaire)</li>
            <li>Confirmation de votre place</li>
            <li>Envoi des détails de la formation</li>
          </ol>
        </div>
      </div>
    </div>

    <div style="padding: 20px; text-align: center; color: #47534E; font-size: 12px;">
      <p>Incubia Algérie - Formations & Mentorat</p>
      <p>Alger, Algérie | contact@incuba-dz.com</p>
    </div>
  </div>
</body>
</html>
  `;
}
