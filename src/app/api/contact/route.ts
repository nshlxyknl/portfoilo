
export const runtime = "nodejs"

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {

    const { name, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("ENV CHECK:", {
      user: !!process.env.SMTP_USER,
      pass: !!process.env.SMTP_PASSWORD,
    })



    await transporter.sendMail({
      from: "noreply@nischalkhanal7.com.np",
      to: process.env.SMTP_TO_EMAIL,
      subject: `Contact message from Portfoilo`,
      html: `
        <p><strong>Name: ${name} </strong></p>
        <p><strong>${message}</strong></p>
      `,
    });


    return NextResponse.json(
      { success: true}
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:"Unknown error",
      },
      { status: 500 }
    );
  }
}
