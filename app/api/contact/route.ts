import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { fullName, email, message } = await req.json();
  console.log('req', fullName, email, message);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Add your Gmail email here
      pass: process.env.GMAIL_PASS, // Add your Gmail app password here
    },
  });
  console.log("here")
  const mailOptions = {
    from: email,
    to: 'akashkhalekar@gmail.com',
    subject: `Contact Form Submission from ${fullName}`,
    text: message,
    html: `<p><strong>Name:</strong> ${fullName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    console.log('before sending email');
    await transporter.sendMail(mailOptions);
    console.log('after sending email');
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong, please try again.' }, { status: 500 });
  }
}
