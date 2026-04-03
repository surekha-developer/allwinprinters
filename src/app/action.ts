// "use server";

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendEmail(formData: FormData) {
//   try {
//     const name = formData.get("name") as string;
//     const email = formData.get("email") as string;
//     const message = formData.get("message") as string;

//     if (!name || !email || !message) {
//       return { success: false };
//     }

//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: process.env.TO_EMAIL!,
//       subject: `New Contact from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Message: ${message}
//       `,
//     });

//     return { success: true };
//   } catch (error) {
//     console.log(error);
//     return { success: false };
//   }
// }

//........

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

    if (!name || !email || !mobile || !message) {
      return { success: false, message: "Missing required fields" };
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // ✅ 1. Send email to OWNER
    const ownerRes = await resend.emails.send({
      from: `JK Enterprises <${fromEmail}>`,
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: `New Contact from ${name} - ${service || "General"}`,
      text: `
🚀 New Inquiry

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Service Interested: ${service || "Not Specified"}

Message:
${message}
      `,
    });

    if (ownerRes.error) {
      console.log("Resend Owner API Error:", ownerRes.error);
      return { success: false, message: ownerRes.error.message };
    }

    // ✅ 2. Auto-reply to CUSTOMER
    // NOTE: On Resend's free tier, sending to an unverified email address will fail. 
    // We log it but do not fail the whole form submission so the owner still gets the inquiry.
    const customerRes = await resend.emails.send({
      from: `JK Enterprises <${fromEmail}>`,
      to: email,
      subject: "Thank you for contacting JK Enterprises",
      text: `
Hi ${name},

Thank you for reaching out to JK Enterprises.

We have received your message regarding "${service || "your inquiry"}" and our team will get back to you shortly at ${mobile} or via email.

Your Message:
"${message}"

Best regards,
JK Enterprises Team
#11-126, Opp IDPL Colony, Sumitra Nagar, Hyderabad-37
8712413159, 86862 42499 | Jke.jayaram@gmail.com
      `,
    });

    if (customerRes.error) {
      console.log("Resend Customer API Error:", customerRes.error);
      // We don't return false here, because the owner still received the mail.
      // But logging it will help debugging.
    }

    return { success: true };
  } catch (error: any) {
    console.log("Catch block error:", error);
    return { success: false, message: error.message || "Failed to send message. Please contact us directly at +91-8712413159." };
  }
}