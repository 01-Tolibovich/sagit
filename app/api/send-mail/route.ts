import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const email = "bramf.tj@gmail.com"
  
  try {
    const { applyForm } = await req.json();

    if (!applyForm) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: email,
        pass: process.env.EMAIL_KEY
      }
    })

    await transporter.sendMail({
      from: `bramf.tj <${email}>`,
      to: email,
      subject: "Заявка на мебель",
      html: `
      <div>
        <ul>
          <li>${applyForm.p}</li>
        </ul>
      </div>
      `
    })
  } catch (error) {
    console.error(error);
    
  }
};
