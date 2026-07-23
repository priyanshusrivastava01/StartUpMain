const nodemailer = require('nodemailer');

const sendLeadNotificationEmail = async (lead) => {
  // Check if SMTP is configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('----------------------------------------------------');
    console.log(`[Email Notification (SIMULATED)] New lead received!`);
    console.log(`Name: ${lead.fullName}`);
    console.log(`Phone: ${lead.phone}`);
    console.log(`Email: ${lead.email}`);
    console.log(`Workspace: ${lead.workspaceType}`);
    console.log(`Message: ${lead.message || 'N/A'}`);
    console.log('SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not set. Skipping real email send.');
    console.log('----------------------------------------------------');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Startup Cafe Notifications" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: `🔥 New Lead Inquiry: ${lead.fullName} (${lead.workspaceType})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e9e2d8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background-color: #FFDE4D; color: #000; padding: 20px; font-weight: bold; font-size: 20px; text-align: center; border-bottom: 2px solid #000;">
             Startup Cafe Gorakhpur — New Booking Inquiry
          </div>
          <div style="padding: 24px; background-color: #fff;">
            <p style="font-size: 16px; margin-top: 0;">You have received a new booking inquiry from the website:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 35%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">${lead.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;"><a href="tel:${lead.phone}">${lead.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${lead.email}">${lead.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Workspace Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">
                  <span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 13px;">
                    ${lead.workspaceType}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-style: italic;">${lead.message || 'No additional message.'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Date/Time:</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">${new Date(lead.createdAt || Date.now()).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="https://wa.me/91${lead.phone.replace(/[^0-9]/g, '')}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                💬 Contact on WhatsApp
              </a>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
            Startup Cafe Gorakhpur Workspace API System
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Message sent successfully: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`[Email Error] Failed to send email: ${error.message}`);
  }
};

module.exports = { sendLeadNotificationEmail };
