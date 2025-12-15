import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const fromLocation = body.fromLocation?.trim();
    const toLocation = body.toLocation?.trim();
    const message = body.message?.trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, Email and Phone are required" },
        { status: 400 }
      );
    }

    await sendMail({
      subject: "New Moving Quote Request",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Moving From:</strong> ${fromLocation || "N/A"}</p>
        <p><strong>Moving To:</strong> ${toLocation || "N/A"}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
