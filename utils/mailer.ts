import nodemailer from "nodemailer";

const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587", 10),
    secure: process.env.EMAIL_PORT === "465",
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASS as string,
    },
  });
};

export const sendMail = async (
  from: string,
  to: string,
  subject: string,
  text: string,
  // html?: string
) => {
  const transporter = createTransporter();

  const mailOptions = {
    from,
    to,
    subject,
    text,
    // html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return info;
  } catch (error) {
    console.error(
      `Error sending email: ${error instanceof Error ? error.message : error}`
    );
    throw error;
  }
};
