import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Email and message are required." }),
        { status: 400 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "prajwalhulamani5111999@gmail.com";

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      process.env.SMTP_USER ||
      toEmail;

    const port = Number(process.env.SMTP_PORT || 587);
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER || fromEmail,
        pass: process.env.SMTP_PASS,
      },
      // For local/dev environments behind proxies or with custom CAs,
      // allow self-signed certificates so the connection succeeds.
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    });

    const mailOptions = {
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio contact from ${name || "visitor"}`,
      text: `
New message from your portfolio contact form:

Name: ${name || "N/A"}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
        <h2>New message from your portfolio contact form</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br />")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message." }),
      { status: 500 }
    );
  }
}
