import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const inquirySchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(8).max(30),
  email: z.string().email().optional().or(z.literal("")),
  interest: z.string().min(2),
  budget: z.string().min(2),
  message: z.string().max(500).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = inquirySchema.parse(body);

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Yeni Yatırım Talebi - ${data.name}`,
      replyTo: data.email || undefined,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#111">
          <h2>Yeni Yatırım Talebi</h2>
          <p><strong>Ad Soyad:</strong> ${data.name}</p>
          <p><strong>Telefon:</strong> ${data.phone}</p>
          <p><strong>E-posta:</strong> ${data.email || "-"}</p>
          <p><strong>İlgi Alanı:</strong> ${data.interest}</p>
          <p><strong>Yatırım Aralığı:</strong> ${data.budget}</p>
          <p><strong>Mesaj:</strong><br/>${data.message || "-"}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Form gönderilemedi." },
      { status: 400 },
    );
  }
}