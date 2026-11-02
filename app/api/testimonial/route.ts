
import { NextResponse, type NextRequest } from "next/server";
import { sendTestimonialEmail } from "@/services/TestimonialForm";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body || typeof body !== "object" || Array.isArray(body)) {
            return NextResponse.json(
                { success: false, message: "Invalid request body." },
                { status: 400 }
            );
        }

        const {
            name,
            role,
            organization,
            serviceCategory,
            testimonialInput,
        } = body;

        const fields = {
            name,
            role,
            organization,
            serviceCategory,
            testimonialInput,
        };


        for (const [key, value] of Object.entries(fields)) {
            if (typeof value !== "string" || !value.trim()) {
                return NextResponse.json(
                    {
                        success: false,
                        message: `${key} is required.`,
                    },
                    { status: 400 }
                );
            }
        }


        const limits: Record<string, number> = {
            name: 100,
            role: 100,
            organization: 150,
            serviceCategory: 100,
            testimonialInput: 3000,
        };

        for (const [key, value] of Object.entries(fields)) {
            if (value.trim().length > limits[key]) {
                return NextResponse.json(
                    {
                        success: false,
                        message: `${key} exceeds the maximum allowed length.`,
                    },
                    { status: 400 }
                );
            }
        }

        await sendTestimonialEmail({
            name: name.trim(),
            role: role.trim(),
            organization: organization.trim(),
            serviceCategory: serviceCategory.trim(),
            testimonialInput: testimonialInput.trim(),
        });

        return NextResponse.json({
            success: true,
            message: "Testimonial submitted successfully.",
        });

    } catch (error) {
        console.error("API /testimonial Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while submitting your testimonial. Please try again.",
            },
            { status: 500 }
        );
    }
}
