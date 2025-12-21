"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validation
    if (!data.name || !data.email) {
      return {
        success: false,
        error: "Kérjük, töltse ki a kötelező mezőket.",
      };
    }

    // Email to you (notification)
    await resend.emails.send({
      from: "FoglaljOnline <noreply@studiobromo.hu>", // Verified domain
      to: "hello@foglaljonline.hu",
      replyTo: data.email,
      subject: `Új kapcsolatfelvétel: ${data.name}${
        data.company ? ` - ${data.company}` : ""
      }`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d5e4b; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Új kapcsolatfelvétel</h1>
          </div>
          
          <div style="background: #f8faf9; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 120px;">Név:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #111827;">${
                  data.name
                }</td>
              </tr>
              ${
                data.company
                  ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Étterem:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #111827;">${data.company}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${
                    data.email
                  }" style="color: #0d5e4b; font-weight: 600;">${data.email}</a>
                </td>
              </tr>
              ${
                data.phone
                  ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Telefon:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${data.phone}" style="color: #0d5e4b; font-weight: 600;">${data.phone}</a>
                </td>
              </tr>
              `
                  : ""
              }
            </table>
            
            ${
              data.message
                ? `
            <div style="margin-top: 20px;">
              <p style="color: #6b7280; margin-bottom: 8px;">Üzenet:</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="color: #374151; margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
              </div>
            </div>
            `
                : ""
            }
          </div>
        </div>
      `,
    });

    // Confirmation email to the user
    await resend.emails.send({
      from: "FoglaljOnline <noreply@studiobromo.hu>",
      to: data.email,
      subject: "Köszönjük megkeresését! - FoglaljOnline",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d5e4b; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Köszönjük megkeresését!</h1>
          </div>
          
          <div style="background: white; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
              Kedves <strong>${data.name}</strong>!
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Megkaptuk üzenetét és hamarosan felvesszük Önnel a kapcsolatot. 
              Általában 24 órán belül válaszolunk.
            </p>
            
            <div style="background: #f8faf9; padding: 20px; border-radius: 8px; margin: 24px 0;">
              <p style="color: #6b7280; margin: 0 0 8px 0; font-size: 14px;">Addig is, ha sürgős kérdése van:</p>
              <p style="margin: 0;">
                <a href="tel:+36306564162" style="color: #0d5e4b; font-weight: 600; text-decoration: none;">
                  📞 +36 30 656 4162
                </a>
              </p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
              Üdvözlettel,<br>
              <strong>A FoglaljOnline csapata</strong>
            </p>
          </div>
          
          <div style="background: #f8faf9; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} FoglaljOnline. Minden jog fenntartva.
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Hiba történt az üzenet küldésekor. Kérjük, próbálja újra később.",
    };
  }
}
