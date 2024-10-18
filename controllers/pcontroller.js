const Email = require("../models/emailmodel");
const Message = require("../models/messagemodel");
const nodemailer = require("nodemailer");

const EnterMessage = async(req,res)=>{
    const { name,email,message } = req.body;
    try {
        const Messageentry = await Message.create({ name,email,message });
        return res.status(201).json({  "POST":"ok"  });   
    } catch (error) {
        console.log(error);
    }
}

const getEmail =async(req,res)=>{
        const {email} = req.body;
       try {
        const Emailentry = await Email.create({ email });
        var transporter = nodemailer.createTransport({
         service: "gmail",
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         auth: {
           user: process.env.USEREMAIL,
           pass: process.env.USERPASSWORD,
         },
       });
       var mailOptions = {
         from: 'velexceltechnologies@gmail.com',
         to: `${email}`,
         subject: "Email Newsletter",
         text: `Welcome to Velexcel Technologies`, };
       transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
           console.log(error);
         } else {
           console.log("Email sent: " + info.response);
           return res.send({Status:"Success"});  }
       });
     } catch (error) {
           console.log(error);
     }}
     
module.exports = {getEmail,EnterMessage};