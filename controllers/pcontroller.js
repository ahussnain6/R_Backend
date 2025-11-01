const Email = require("../models/emailmodel");
const Message = require("../models/messagemodel");
const nodemailer = require("nodemailer");

const EnterMessage = async(req,res)=>{
    const { name,email,message } = req.body;
    try {
        const Messageentry = await Message.create({ name,email,message });
        return res.status(201).json({  "POST":"ok"  });   
    } catch (error) {
        // console.log(error);
    }
} 
   const getEmail = async (req, res) => {
  const { email } = req.body;
  
  try {
    // Save the email to your database
    const Emailentry = await Email.create({ email });

    // Create the mail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,  // Use TLS
      auth: {
        user: process.env.USEREMAIL,
        pass: process.env.USERPASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: {
        name: 'VelExcel Solutions',
        address: process.env.USEREMAIL,
      },
      to: email,
      subject: 'Unlock Your Potential with Velexcel Solutions',
      text: `Dear Valued Partner,\n\nWelcome to VelExcel Solutions, where innovation meets excellence! We're thrilled to have you on board as we embark on a journey to transform your digital landscape.\n\nIn today's fast-paced world, staying ahead of the competition is crucial. Our cutting-edge IT solutions are designed to empower your business, streamline operations, and elevate your success. Whether it's cloud computing, cybersecurity, or custom software development, we are committed to delivering exceptional value tailored to your unique needs.\n\nJoin us as we harness the power of technology to unlock new possibilities and drive growth. Stay tuned for insights, updates, and exclusive offers that will keep you at the forefront of your industry.\n\nThank you for choosing VelExcel Technologies—where your vision becomes reality!\n\nBest regards,\nThe VelExcel Technologies Team`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    // Log the email response
    // console.log('Email sent: ' + info.response);
    
    // Send success response
    return res.send({ Status: 'Success' });

  } catch (error) {
    // Log any error that occurred
    // console.error('Error sending email:', error);
    // Send error response
    return res.status(500).send({ Status: 'Error', Message: 'Failed to send email.' });
  }
};
     
module.exports = {getEmail,EnterMessage};

