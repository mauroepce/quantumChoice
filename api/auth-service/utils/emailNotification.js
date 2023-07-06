// emailNotification.js

const nodemailer = require("nodemailer");

// Mail transport configuration
const transporter = nodemailer.createTransport({
  // Set here the information of your outgoing mail provider
  // Example to use Gmail:
  service: "gmail",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  secureConnection: true,
  auth: {
    user: "quantumchoice.noreply@gmail.com",
    pass: "zwjzqwhqizmarvnc",
  },
  tls: {
    rejectUnauthorized: true,
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const mailOptions = {
      from: "quantumchoice.noreply@gmail.com",
      to: email,
      subject: "quantumChoice - Verification Email",
      html: `
        <h1>Welcome to QuantumChoice</h1>
        <p>Please, verified your email clicking the following link:</p>
        <a href="https://www.tuweb.com/verificar-email?token=${verificationToken}">Verifiy my email</a>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error(`Error sending verification email: ${error.message}`);
    throw error;
  }
};

module.exports = {
  sendVerificationEmail,
};
