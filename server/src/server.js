const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8000;
require("./db/mongoose");
const User = require("./models/user");

const app = express();
console.log("here", __dirname);
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 587, // Port for TLS/STARTTLS
    secure: false, // Requires SSL (TLS) - set to true if you don't want to use STARTTLS
    auth: {
      method: 'LOGIN',
      user: 'attendfiy@gmail.com',
      pass: 'oslc iyvd cial glld'
    }
});

transporter.verify(function(error, success) {
  if (error) {
      console.log(error);
  } else {
      console.log("Server is ready to take our messages");
  }
});

app.post('/send-email', (req, res) => {

  const mailOptions = {
      from: 'attendfiy@gmail.com',
      to: 'rvibhatt01@gmail.com',
      subject: "Welcome to Attendify",
      text: 'Welcome to Attendify'
  };

  console.log("mailOptions =>",mailOptions)

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error: Could not send email');
      } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
      }
  });
});

app.post("/api/submit", async (req, res) => {
  try {
    const user = new User(req.body);

    // const existingUser = await User.findOne({ email: user.email });
    // if (existingUser) {
    //   return res
    //     .status(400)
    //     .send({ error: "User with this email already exists." });
    // }

    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    const userData = await User.create({
      email: user.email,
      password: user.password,
      selectBatch: user.selectBatch,
      rememberMe: user.rememberMe,
    });

    const token = jwt.sign(
      { id: userData._id, email: userData.email },
      "shhh", // process.env.jwtsecret
      {
        expiresIn: "2h",
      }
    );
    const verificationLink = `http://localhost:${port}/verify-email?token=${token}`;
    function generateWelcomeEmail(verificationLink) {
      return `
          <html>
              <head>
                  <style>
                      /* Add any CSS styling here */
                  </style>
              </head>
              <body>
                  <p>Hello</p>
                  <p>Thank you for signing up for our app!</p>
                  <p>Please click <a href="${verificationLink}">here</a> to verify your email address.</p>
              </body>
          </html>
      `;
    }

    const mailOptions = {
      from: 'attendfiy@gmail.com',
      to: userData.email,
      subject: "Welcome to Attendify",
      html: generateWelcomeEmail(verificationLink)
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error: Could not send email');
      } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
      }
    });

    userData.token = token;
    userData.password = undefined;

    res.status(201).json({ message: "Form submitted successfully", userData });
  } catch (error) {
    console.error("Error submitting form:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form" });
  }
});

app.get('/verify-email', (req, res) => {
  const token = req.query.token;

  jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
          return res.status(401).json({ error: 'Invalid or expired token' });
      }

      console.log("Verified")

      res.status(200).json({ message: 'Email verified successfully' });
  });
});

app.post("/api/login", async (req, res) => {
  try {
    const loginEmail = req.body.email;
    const user = await User.findOne({ email: loginEmail });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const password = user.password;
    const isPasswordValid = await bcrypt.compare(req.body.password, password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(201).json({ message: "Logged In Successfully", user });
  } catch (error) {
    {
      console.error("Error Logging In:", error);
      res.status(500).json({ error: "An error occurred while Logging In" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});