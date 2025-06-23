import { sendMail } from "./controllers/sendReset.js";

const testMail = async () => {
  const to = "gabidinu@rocketmail.com";
  const subject = "Test Email";
  const htmlContent =
    "<h1>This is a test email</h1><p>Hello, this is a test email sent from the Node.js application.</p>";
  try {
    const info = await sendMail(to, subject, htmlContent);
    console.log("Email sent successfully:", info);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

testMail();
