import { NextResponse, type NextRequest } from "next/server";
import { sendContactEmail } from "@/services/Contact";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;
     
        if (!name || typeof name !== "string" || !name.trim() ||
            !email || typeof email !== "string" || !email.trim() ||
            !message || typeof message !== "string" || !message.trim()
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Name, email, and message are required fields.",
                },
                { status: 400 }
            );
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const cleanEmail = email.trim().toLowerCase();

        if (!emailRegex.test(cleanEmail)) {
            return NextResponse.json(
                {   success: false,
                    message: "Please provide a valid email address.",
                },
                { status: 400 }
            );
        }

        await sendContactEmail({
            name: name.trim(),
            phone: typeof phone === "string" ? phone.trim() : "",
            email: cleanEmail,
            message: message.trim(),
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully.",
        });
    } catch (error) {
        console.error("API /contact Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while sending your message. Please try again.",
            },
            { status: 500 }
        );
    }
}