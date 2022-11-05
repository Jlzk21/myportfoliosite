const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require('axios');
const dotenv = require('dotenv').config()

// server used to send send emails
const app = express();
app.use(cors());
//Parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "********@gmail.com",
    pass: "",
  },
});

//POST route
router.post("/post", async (req, res) => {
  //Destructuring response token from request body
  const { token } = req.body;

  //sends secret key and response token to google
  await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6LeVYd4iAAAAAOVnw_tcUmihQDdbgXkATU_t6qMa&response=${token}`
  );

  //check response status and send back to the client-side
  if (res.status(200)) {
    res.send("Human 👨 👩");
  } else {
    res.send("Robot 🤖");
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
