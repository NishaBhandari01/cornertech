
import { transporter } from "@/lib/transporter";

interface Data {
    name: string;
    email: string;
    phone?: string | number;
    message: string;
}

export async function sendContactEmail(data: Data) {
    const { name, email, phone, message } = data;
    const formattedPhone = phone ? String(phone) : "N/A";

    // Escape user input to prevent HTML injection
    const escapeHtml = (value: string) =>
        value.replace(/[&<>"']/g, (char) => {
            const entities: Record<string, string> = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            };
            return entities[char];
        });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(formattedPhone);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
        from: `"Cornor Tech Pvt. Ltd. Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER,
        subject: `New Contact Message from ${name}`,
        replyTo: email,

        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

        <body style="margin:0; padding:0; background-color:#0b1120; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                style="background-color:#0b1120; padding:30px 10px;">

                <tr>
                    <td align="center">

                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                            style="max-width:600px; background-color:#111c30; border-radius:12px; border:1px solid #26364e; overflow:hidden;">

                            <!-- Header -->
                            <tr>
                                <td style="background-color:#080d1e; padding:24px 30px; border-bottom:1px solid #26364e;">

                                    <img
                                        src="https://cornortech.com/logo.avif"
                                        alt="Cornor Tech Logo"
                                        width="44"
                                        height="44"
                                        style="display:block; border-radius:50%; border:2px solid #2a8aba; background-color:#0b1120; object-fit:contain;"
                                    />

                                    <p style="margin:14px 0 6px; font-family:monospace; font-size:12px; color:#2a8aba; text-transform:uppercase; letter-spacing:1.5px; font-weight:600;">
                                        Cornor Tech Notification
                                    </p>

                                    <h1 style="margin:0; color:#ffffff; font-size:21px; font-weight:700; letter-spacing:-0.5px;">
                                        New Contact Submission
                                    </h1>

                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td style="padding:30px;">

                                    <!-- Contact Information -->
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                        style="margin-bottom:24px; background-color:#0b1120; border-radius:8px; border:1px solid #26364e; padding:18px;">

                                        <tr>
                                            <td style="padding-bottom:16px;">
                                                <span style="color:#8293aa; font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px;">
                                                    From Name
                                                </span>
                                                <div style="color:#f8fafc; font-size:15px; font-weight:600; margin-top:5px;">
                                                    ${safeName}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding-bottom:16px;">
                                                <span style="color:#8293aa; font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px;">
                                                    Email Address
                                                </span>
                                                <div style="font-size:15px; font-weight:500; margin-top:5px;">
                                                    <a href="mailto:${safeEmail}" style="color:#2a8aba; text-decoration:none;">
                                                        ${safeEmail}
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style="color:#8293aa; font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px;">
                                                    Phone Number
                                                </span>
                                                <div style="font-size:15px; font-weight:500; margin-top:5px;">
                                                    ${
                                                        phone
                                                            ? `<a href="tel:${safePhone}" style="color:#2a8aba; text-decoration:none;">${safePhone}</a>`
                                                            : `<span style="color:#94a3b8;">N/A</span>`
                                                    }
                                                </div>
                                            </td>
                                        </tr>

                                    </table>

                                    <!-- Message -->
                                    <div style="margin-bottom:10px;">
                                        <span style="color:#8293aa; font-size:11px; text-transform:uppercase; font-weight:700; letter-spacing:1px;">
                                            Message Body
                                        </span>
                                    </div>

                                    <div style="background-color:#0b1120; border-left:3px solid #2a8aba; border-radius:4px; padding:20px; color:#cbd5e1; font-size:14px; line-height:1.8; white-space:pre-wrap; font-family:Arial, sans-serif;">
                                        ${safeMessage}
                                    </div>

                                    <!-- Reply Button -->
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                        style="margin-top:28px;">

                                        <tr>
                                            <td align="center">
                                                <a href="mailto:${safeEmail}"
                                                    style="display:inline-block; background-color:#2a8aba; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:13px 28px; border-radius:6px; text-align:center;">
                                                    Reply Directly to ${safeName}
                                                </a>
                                            </td>
                                        </tr>

                                    </table>

                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background-color:#080d1e; padding:18px 30px; border-top:1px solid #26364e; text-align:center;">

                                    <p style="margin:0; color:#8293aa; font-size:12px; font-family:monospace;">
                                        Sent automatically via Cornor Tech Contact Notification System.
                                    </p>

                                    <p style="margin:8px 0 0; color:#2a8aba; font-size:12px;">
                                        Cornor Tech Pvt. Ltd.
                                    </p>

                                </td>
                            </tr>

                        </table>

                    </td>
                </tr>
            </table>

        </body>
        </html>
        `,
    });
}
