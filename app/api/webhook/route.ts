import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Resend } from 'resend';

// Resend inicializálása
const resend = new Resend(process.env.RESEND_API_KEY);

// GetStream API Secret - ezzel ellenőrizzük a webhook signature-t
const STREAM_API_SECRET = process.env.STREAM_API_SECRET!;

// Email beállítások
const EMAIL_FROM = process.env.EMAIL_FROM || 'hello@studiobromo.hu';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL!;

// Webhook signature ellenőrzése
function verifyWebhookSignature(body: string, signature: string | null): boolean {
  if (!signature || !STREAM_API_SECRET) {
    return false;
  }

  const expectedSignature = crypto
    .createHmac('sha256', STREAM_API_SECRET)
    .update(body)
    .digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch {
    return false;
  }
}

// GetStream webhook event típusok
interface GetStreamUser {
  id: string;
  name?: string;
  image?: string;
}

interface GetStreamMessage {
  id: string;
  text: string;
  user: GetStreamUser;
  created_at: string;
  type: string;
}

interface GetStreamChannel {
  id: string;
  type: string;
  name?: string;
  members?: GetStreamUser[];
}

interface GetStreamWebhookEvent {
  type: string;
  cid?: string;
  channel_id?: string;
  channel_type?: string;
  channel?: GetStreamChannel;
  message?: GetStreamMessage;
  user?: GetStreamUser;
  created_at: string;
}

// Email küldése új üzenetről
async function sendNewMessageEmail(event: GetStreamWebhookEvent) {
  const { message, channel, user } = event;
  
  if (!message || !user) {
    console.log('Hiányzó message vagy user adat');
    return;
  }

  const senderName = user.name || user.id;
  const channelName = channel?.name || channel?.id || 'Ismeretlen csatorna';
  const messagePreview = message.text.length > 200 
    ? message.text.substring(0, 200) + '...' 
    : message.text;

  try {
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFICATION_EMAIL,
      subject: `Új üzenet: ${senderName} írt a ${channelName} csatornán`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h2 style="color: #1a1a1a; margin: 0 0 16px 0; font-size: 20px;">
              💬 Új chat üzenet érkezett
            </h2>
            
            <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
              <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                <strong>Küldő:</strong> ${senderName}
              </p>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">
                <strong>Csatorna:</strong> ${channelName}
              </p>
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Időpont:</strong> ${new Date(message.created_at).toLocaleString('hu-HU')}
              </p>
            </div>
            
            <div style="background: #e8f4fd; border-left: 4px solid #0066cc; padding: 16px; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; color: #1a1a1a; font-size: 16px; line-height: 1.5;">
                ${messagePreview}
              </p>
            </div>
            
            <p style="margin: 24px 0 0 0; color: #999; font-size: 12px; text-align: center;">
              Ez egy automatikus értesítés a chat rendszerből.
            </p>
          </div>
        </body>
        </html>
      `,
      text: `Új üzenet érkezett!\n\nKüldő: ${senderName}\nCsatorna: ${channelName}\nIdőpont: ${new Date(message.created_at).toLocaleString('hu-HU')}\n\nÜzenet:\n${messagePreview}`,
    });

    if (error) {
      console.error('Resend hiba:', error);
      throw error;
    }

    console.log('Email sikeresen elküldve:', data?.id);
    return data;
  } catch (error) {
    console.error('Email küldési hiba:', error);
    throw error;
  }
}

// POST handler - GetStream webhook fogadása
export async function POST(request: NextRequest) {
  try {
    // Raw body beolvasása signature ellenőrzéshez
    const rawBody = await request.text();
    
    // Signature ellenőrzés - GetStream x-signature header-ben küldi
    const signature = request.headers.get('x-signature');
    
    if (!verifyWebhookSignature(rawBody, signature)) {
      console.error('Érvénytelen webhook signature');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // JSON parse
    const event: GetStreamWebhookEvent = JSON.parse(rawBody);
    
    console.log('GetStream webhook esemény:', event.type);

    // Csak új üzenet eseményekre reagálunk
    if (event.type === 'message.new') {
      // System üzenetek kiszűrése
      if (event.message?.type === 'system') {
        return NextResponse.json({ received: true, skipped: 'system_message' });
      }

      await sendNewMessageEmail(event);
      
      return NextResponse.json({ 
        received: true, 
        emailSent: true,
        messageId: event.message?.id 
      });
    }

    // Egyéb eseménytípusok kezelése (opcionális)
    // Pl: message.read, message.updated, message.deleted, stb.
    
    return NextResponse.json({ 
      received: true, 
      eventType: event.type,
      processed: false 
    });

  } catch (error) {
    console.error('Webhook feldolgozási hiba:', error);
    return NextResponse.json(
      { error: 'Belső szerverhiba' },
      { status: 500 }
    );
  }
}

// GET handler - Webhook endpoint ellenőrzése
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'GetStream webhook endpoint aktív',
    timestamp: new Date().toISOString()
  });
}