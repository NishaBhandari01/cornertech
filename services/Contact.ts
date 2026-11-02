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

        <body style="margin:0; padding:0; background-color:#030712; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                style="background-color:#030712; padding:30px 10px;">

                <tr>
                    <td align="center">

                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                            style="max-width:600px; background-color:#090d16; border-radius:16px; border:1px solid rgba(168,85,247,0.2); overflow:hidden; box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.5);">

                            <!-- Header -->
                            <tr>
                                <td style="background:linear-gradient(135deg, #0f172a 0%, #030712 100%); padding:28px 30px; border-bottom:1px solid rgba(168,85,247,0.15);">

                                    <img
                                        src="https://cornortech.com/logo.png"
                                        alt="Cornor Tech Logo"
                                        width="44"
                                        height="44"
                                        style="display:block; border-radius:12px; border:2px solid rgba(168,85,247,0.4); background-color:#0f172a; object-fit:contain;"
                                    />

                                    <p style="margin:14px 0 6px; font-family:monospace; font-size:11px; color:#c084fc; text-transform:uppercase; letter-spacing:2px; font-weight:700;">
                                        Cornor Tech Notification
                                    </p>

                                    <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:800; letter-spacing:-0.5px;">
                                        New Contact Submission
                                    </h1>

                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td style="padding:30px;">

                                    <!-- Contact Information Card -->
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                        style="margin-bottom:24px; background-color:#0f172a; border-radius:12px; border:1px solid rgba(168,85,247,0.15); padding:18px;">

                                        <tr>
                                            <td style="padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.05);">
                                                <span style="color:#94a3b8; font-size:10px; text-transform:uppercase; font-weight:700; letter-spacing:1.5px;">
                                                    From Name
                                                </span>
                                                <div style="color:#f8fafc; font-size:15px; font-weight:600; margin-top:4px;">
                                                    ${safeName}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
                                                <span style="color:#94a3b8; font-size:10px; text-transform:uppercase; font-weight:700; letter-spacing:1.5px;">
                                                    Email Address
                                                </span>
                                                <div style="font-size:14px; font-weight:500; margin-top:4px;">
                                                    <a href="mailto:${safeEmail}" style="color:#c084fc; text-decoration:none;">
                                                        ${safeEmail}
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding-top:16px;">
                                                <span style="color:#94a3b8; font-size:10px; text-transform:uppercase; font-weight:700; letter-spacing:1.5px;">
                                                    Phone Number
                                                </span>
                                                <div style="font-size:14px; font-weight:500; margin-top:4px;">
                                                    ${
                                                        phone
                                                            ? `<a href="tel:${safePhone}" style="color:#c084fc; text-decoration:none;">${safePhone}</a>`
                                                            : `<span style="color:#64748b;">N/A</span>`
                                                    }
                                                </div>
                                            </td>
                                        </tr>

                                    </table>

                                    <!-- Message Body -->
                                    <div style="margin-bottom:8px;">
                                        <span style="color:#94a3b8; font-size:10px; text-transform:uppercase; font-weight:700; letter-spacing:1.5px;">
                                            Message Body
                                        </span>
                                    </div>

                                    <div style="background-color:#0f172a; border-left:3px solid #a855f7; border-radius:0 12px 12px 0; padding:20px; color:#cbd5e1; font-size:14px; line-height:1.7; white-space:pre-wrap; font-family:Arial, sans-serif;">
                                        ${safeMessage}
                                    </div>

                                    <!-- Reply Button -->
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                        style="margin-top:28px;">

                                        <tr>
                                            <td align="center">
                                                <a href="mailto:${safeEmail}"
                                                    style="display:inline-block; background:linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:13px 28px; border-radius:10px; text-align:center; box-shadow:0 4px 14px 0 rgba(124, 58, 237, 0.4);">
                                                    Reply Directly to ${safeName}
                                                </a>
                                            </td>
                                        </tr>

                                    </table>

                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background-color:#050b14; padding:20px 30px; border-top:1px solid rgba(168,85,247,0.15); text-align:center;">

                                    <p style="margin:0; color:#64748b; font-size:11px; font-family:monospace;">
                                        Sent automatically via Cornor Tech Contact Notification System.
                                    </p>

                                    <p style="margin:6px 0 0; color:#c084fc; font-size:12px; font-weight:600;">
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