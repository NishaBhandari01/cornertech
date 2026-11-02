import { transporter } from "@/lib/transporter";

interface Data {
    name: string;
    role: string;
    organization: string;
    serviceCategory: string;
    testimonialInput: string;
}

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

export async function sendTestimonialEmail(data: Data) {
    const {
        name,
        role,
        organization,
        serviceCategory,
        testimonialInput,
    } = data;

    const safeName = escapeHtml(name);
    const safeRole = escapeHtml(role);
    const safeOrganization = escapeHtml(organization);
    const safeServiceCategory = escapeHtml(serviceCategory);
    const safeTestimonial = escapeHtml(testimonialInput);

    await transporter.sendMail({
        from: `"Cornor Tech Pvt. Ltd." <${process.env.EMAIL_USER}>`,
        to: process.env.TESTIMONIAL_RECEIVER,
        subject: `New Testimonial Submission from ${name}`,

        text: `
New Testimonial Submission

Name: ${name}
Role: ${role}
Organization: ${organization}
Service Category: ${serviceCategory}

Testimonial:
${testimonialInput}
        `,

        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

        <body style="margin:0;padding:0;background-color:#030712;font-family:Arial,Helvetica,sans-serif;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                style="background-color:#030712;padding:30px 10px;">
                <tr>
                    <td align="center">

                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                            style="max-width:600px;background-color:#090d16;border-radius:16px;border:1px solid rgba(168,85,247,0.2);overflow:hidden;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.5);">

                            <!-- Header -->
                            <tr>
                                <td style="background:linear-gradient(135deg, #0f172a 0%, #030712 100%);padding:28px 30px;border-bottom:1px solid rgba(168,85,247,0.15);">

                                    <img
                                        src="https://cornortech.com/logo.png"
                                        alt="Cornor Tech Logo"
                                        width="44"
                                        height="44"
                                        style="display:block;border-radius:12px;border:2px solid rgba(168,85,247,0.4);background-color:#0f172a;object-fit:contain;"
                                    />

                                    <p style="margin:14px 0 6px;font-family:monospace;font-size:11px;color:#c084fc;text-transform:uppercase;letter-spacing:2px;font-weight:700;">
                                        Cornor Tech Notification
                                    </p>

                                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">
                                        New Testimonial Submission
                                    </h1>

                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td style="padding:30px;">

                                    <!-- Details Box -->
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                        style="background-color:#0f172a;border-radius:12px;border:1px solid rgba(168,85,247,0.15);padding:18px;">

                                        <tr>
                                            <td style="padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.05);">
                                                <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;font-weight:700;letter-spacing:1.5px;">
                                                    Full Name
                                                </span>
                                                <div style="color:#f8fafc;font-size:15px;font-weight:600;margin-top:4px;">
                                                    ${safeName}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                                                <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;font-weight:700;letter-spacing:1.5px;">
                                                    Role / Designation
                                                </span>
                                                <div style="color:#e2e8f0;font-size:14px;margin-top:4px;">
                                                    ${safeRole}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                                                <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;font-weight:700;letter-spacing:1.5px;">
                                                    Organization
                                                </span>
                                                <div style="color:#e2e8f0;font-size:14px;margin-top:4px;">
                                                    ${safeOrganization}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding-top:16px;">
                                                <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;font-weight:700;letter-spacing:1.5px;">
                                                    Service Category
                                                </span>
                                                <div style="color:#c084fc;font-size:14px;font-weight:600;margin-top:4px;">
                                                    ${safeServiceCategory}
                                                </div>
                                            </td>
                                        </tr>

                                    </table>

                                    <!-- Testimonial Quote Section -->
                                    <div style="margin-top:24px;margin-bottom:8px;">
                                        <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;font-weight:700;letter-spacing:1.5px;">
                                            Testimonial Message
                                        </span>
                                    </div>

                                    <div style="background-color:#0f172a;border-left:3px solid #a855f7;border-radius:0 12px 12px 0;padding:20px;color:#cbd5e1;font-size:14px;line-height:1.7;white-space:pre-wrap;">
                                        ${safeTestimonial}
                                    </div>

                                    <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-top:25px;">
                                        A new testimonial has been submitted through the Cornor Tech website. Please review the details before publishing it to production.
                                    </p>

                                </td >
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background-color:#050b14;padding:20px 30px;border-top:1px solid rgba(168,85,247,0.15);text-align:center;">

                                    <p style="margin:0;color:#64748b;font-size:11px;font-family:monospace;">
                                        Sent automatically via Cornor Tech Notification System.
                                    </p>

                                    <p style="margin:6px 0 0;color:#c084fc;font-size:12px;font-weight:600;">
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