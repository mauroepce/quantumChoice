// emailNotification.js

const nodemailer = require("nodemailer");

// Configuración de transporte de correo
const transporter = nodemailer.createTransport({
  // Configura aquí la información de tu proveedor de correo saliente
  // Ejemplo para usar Gmail:
  service: "gmail",
  auth: {
    user: "quantumchoice.noreply@gmail.com",
    pass: "TSw8y8MEeZqAcce",
  },
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
