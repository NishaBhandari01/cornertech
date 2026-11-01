
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

        <body style="margin:0;padding:0;background-color:#0f172a;font-family:Arial,Helvetica,sans-serif;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                style="background-color:#0f172a;padding:30px 10px;">
                <tr>
                    <td align="center">

                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                            style="max-width:600px;background-color:#1e293b;border-radius:12px;border:1px solid #334155;overflow:hidden;">

                            <!-- Header -->
                            <tr>
                                <td style="background-color:#0b1120;padding:24px 30px;border-bottom:1px solid #334155;">

                                    <img
                                        src="https://cornortech.com/logo.avif"
                                        alt="Cornor Tech Logo"
                                        width="44"
                                        height="44"
                                        style="display:block;border-radius:50%;border:2px solid #2a8aba;background-color:#0b1120;object-fit:contain;"
                                    />

                                    <p style="margin:14px 0 6px;font-family:monospace;font-size:12px;color:#2a8aba;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">
                                        Cornor Tech Notification
                                    </p>

                                    <h1 style="margin:0;color:#ffffff;font-size:21px;font-weight:700;">
                                        New Testimonial Submission
                                    </h1>

                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td style="padding:30px;">

                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                        style="background-color:#0f172a;border-radius:8px;border:1px solid #334155;padding:18px;">

                                        <tr>
                                            <td style="padding-bottom:16px;">
                                                <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:700;letter-spacing:1px;">
                                                    Full Name
                                                </span>
                                                <div style="color:#f8fafc;font-size:15px;font-weight:600;margin-top:5px;">
                                                    ${safeName}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding-bottom:16px;">
                                                <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:700;letter-spacing:1px;">
                                                    Role / Designation
                                                </span>
                                                <div style="color:#f8fafc;font-size:15px;margin-top:5px;">
                                                    ${safeRole}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding-bottom:16px;">
                                                <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:700;letter-spacing:1px;">
                                                    Organization
                                                </span>
                                                <div style="color:#f8fafc;font-size:15px;margin-top:5px;">
                                                    ${safeOrganization}
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:700;letter-spacing:1px;">
                                                    Service Category
                                                </span>
                                                <div style="color:#2a8aba;font-size:15px;font-weight:600;margin-top:5px;">
                                                    ${safeServiceCategory}
                                                </div>
                                            </td>
                                        </tr>

                                    </table>

                                    <!-- Testimonial -->
                                    <div style="margin-top:25px;margin-bottom:10px;">
                                        <span style="color:#64748b;font-size:11px;text-transform:uppercase;font-weight:700;letter-spacing:1px;">
                                            Testimonial Message
                                        </span>
                                    </div>

                                    <div style="background-color:#0f172a;border-left:3px solid #2a8aba;border-radius:4px;padding:20px;color:#cbd5e1;font-size:14px;line-height:1.8;white-space:pre-wrap;">
                                        ${safeTestimonial}
                                    </div>

                                    <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-top:25px;">
                                        A new testimonial has been submitted through the Cornor Tech website.
                                        Please review the submission before publishing it.
                                    </p>

                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background-color:#0b1120;padding:18px 30px;border-top:1px solid #334155;text-align:center;">

                                    <p style="margin:0;color:#64748b;font-size:12px;font-family:monospace;">
                                        Sent automatically via Cornor Tech Testimonial Notification System.
                                    </p>

                                    <p style="margin:8px 0 0;color:#2a8aba;font-size:12px;">
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
