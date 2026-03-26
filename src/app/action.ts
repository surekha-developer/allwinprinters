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
    await resend.emails.send({
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

    // ✅ 2. Auto-reply to CUSTOMER
    await resend.emails.send({
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
8712413159 | Jke.jayaram@gmail.com
      `,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to send message. Please contact us directly at +91-8712413159." };
  }
}