import { sendEmail } from "@/lib/mail-utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    console.log("NAME===", name, email, service, message);
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const sender = {
      name:name,
      address: email,
    };

    const receipients = [
      {
        name: "MBG",
        address: "abzmoosa@gmail.com", 
      },
    ];

    const subject = service ? `New Quote Request: ${service}` : "Enquire message";
    const htmlMessage = `
      <h3>New Quote Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email
    const result = await sendEmail({
      sender,
      receipients,
      subject,
      message: htmlMessage,
    });

    // Return success response
    return NextResponse.json({ accepted: result.accepted });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Unable to send email' },
      { status: 500 }
    );
  }
}
