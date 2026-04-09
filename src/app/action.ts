


"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Basic Validation
    if (!name || !email || !mobile || !message) {
      return { success: false, message: "Missing required fields" };
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
   const toEmail = process.env.TO_EMAIL || "jkenterprises.allwin2908@gmail.com";

    // ✅ Send email ONLY to OWNER
    const ownerRes = await resend.emails.send({
      from: `JK Enterprises Inquiry <${fromEmail}>`,
      to: toEmail,
      replyTo: email, // This allows you to click 'Reply' in your email to message the client back
      subject: `New Lead: ${name} - ${service || "General"}`,
      text: `
🚀 New Website Inquiry

Customer Details:
----------------
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Service: ${service || "Not Specified"}

Message Content:
----------------
${message}
      `,
    });

    if (ownerRes.error) {
      console.error("Resend Error:", ownerRes.error);
      return { success: false, message: ownerRes.error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Catch block error:", error);
    return { 
      success: false, 
      message: "Failed to send message. Please contact us at +91-8712413159." 
    };
  }
}