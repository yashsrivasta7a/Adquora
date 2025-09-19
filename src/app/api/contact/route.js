import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import 'dotenv/config'
let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

console.log(resend);

export async function POST(request) {
  try {
    // Check if Resend is properly configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Email:</strong> ${email}</p>
            ${company ? `<p style="margin: 10px 0;"><strong style="color: #667eea;">Company:</strong> ${company}</p>` : ''}
            <p style="margin: 10px 0;"><strong style="color: #667eea;">Subject:</strong> ${subject}</p>
          </div>
          
          <h3 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">Message</h3>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px;">This message was sent from the Adquora contact form.</p>
            <p style="color: #666; font-size: 12px;">Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
    const autoReplyContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; text-align: center;">Thank You for Contacting Adquora</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333;">Hi ${name},</h2>
          
          <p style="line-height: 1.6; color: #555;">
            Thank you for reaching out to us! We've received your message and our team will get back to you within 24 hours.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; font-style: italic; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            In the meantime, feel free to explore our services and learn more about how we can help transform your digital presence.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://adquora.com" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 25px; display: inline-block; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; text-align: center;">
              Best regards,<br>
              <strong>The Adquora Team</strong>
            </p>
          </div>
        </div>
      </div>
    `;
    const adminEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to : ['info.adquora@gmail.com'],
      // to: ['hello@adquora.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: emailContent,
      replyTo: email,
    });

   

    if (adminEmail.error ) {
      console.error('Resend error:', adminEmail.error );
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        adminEmailId: adminEmail.data?.id,
        userEmailId: userEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}