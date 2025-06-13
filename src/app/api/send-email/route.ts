import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, company, email, phone, message } = await req.json();

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: 'covo.so',
    port: 465,
    secure: true,
    auth: {
      user: 'feedback@covo.so',
      pass: '@HwyJe2CFpGSyCS',
    },
  });

  // Compose email
  const mailOptions = {
    from: '"Covo Form" <feedback@covo.so>',
    to: 'hello@covo.so',
    subject: 'New Form Submission',
    html: `
      <h2>New Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}