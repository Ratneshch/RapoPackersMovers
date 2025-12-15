import nodemailer from "nodemailer";

export const sendMail = async ({ subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Rapo Packers Movers" <${process.env.EMAIL_USER}>`,
    to: "rapopackers@gmail.com",
    subject,
    html,
  });
};
