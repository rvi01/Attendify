const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8000;
require("./db/mongoose");
const User = require("./models/user");
const MeetingModel = require("./models/meetingModal")
const secretKey = process.env.JWT_SECRET;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
  console.log("verifyToken")
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate' });
    req.userId = decoded.id;
    next();
  });
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 587, // Port for TLS/STARTTLS
    secure: false, // Requires SSL (TLS) - set to true if you don't want to use STARTTLS
    auth: {
      method: 'LOGIN',
      user: 'attendfiy@gmail.com',
      pass: 'fyrl jrjk jlno nsdv'
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
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res
        .status(400)
        .send({ error: "User with this email already exists." });
    }

    const userType = req.body.userType
    console.log("userType =>",userType)
    if(userType == "instructor"){
      user.isInstructor = "Y",
      user.role = "I"
    } else {
      user.isStudent = "Y",
      user.role = "S"
    }

    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    const userData = await User.create({
      email: user.email,
      password: user.password,
      selectBatch: user.selectBatch,
      rememberMe: user.rememberMe,
      isInstructor : user.isInstructor,
      isStudent : user.isStudent,
      role : user.role
    });

    const token = jwt.sign(
      { id: userData._id, email: userData.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    const verificationLink = `https://attendify-gj3u.onrender.com/verify-email?token=${token}`;
    if (userData.role == "I") {
      console.log("instructor");
      function generateWelcomeEmail(verificationLink,userData) {
        return `
            <html>
                <head>
                    <style>
                        /* Add any CSS styling here */
                    </style>
                </head>
                <body>
                    <p>Hello admin</p>
                    <p>We Recevied this profile for Instructor Role</p>
                    <table>
                      <thead>
                          <tr>
                              <th>Email</th>
                              <th>Batch</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>${userData.email}</td>
                              <td>${userData.selectBatch}</td>
                          </tr>
                      </tbody>
                  </table>
                  <p></p>
                  <p>Please click <a href="${verificationLink}">here</a> to verify this profile.</p>
                </body>
            </html>
        `;
      }
      const mailOptions = {
        from: 'attendfiy@gmail.com',
        to: 'attendfiy@gmail.com',
        subject: "Instructor Verification",
        html: generateWelcomeEmail(verificationLink,userData)
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error: Could not send email');
        } else {
            console.log('Email Verification sent: ' + info.response);
            res.send('Email sent successfully');
        }
      });
      userData.token = token;
      userData.password = undefined;
      res.status(201).json({ message: "Form submitted successfully", userData });
    } else {
      const verificationLink = `https://attendify-gj3u.onrender.com/verify-email?token=${token}`;
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
            console.log('Email Verification sent: ' + info.response);
            res.send('Email sent successfully');
        }
      });

      userData.token = token;
      userData.password = undefined;
      res.status(201).json({ message: "Form submitted successfully", userData });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form" });
  }
});

app.get('/verify-email', (req, res) => {
  const token = req.query.token;
  jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
          return res.status(401).json({ error: 'Invalid or expired token' });
      }
      
      var userId = decoded.id;
      var userEmail = decoded.email
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { isVerified: true },
        { new: true }
      );
      user.password = undefined;
      console.log("Verified")
      const redirectUrl = "https://attendify-flax.vercel.app/signin";
      res.status(200).redirect(redirectUrl);
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

    if(user && isPasswordValid == true){
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;
      //cookie section
      const cookie = req.cookies;
      const option = {
        expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      }
      res.status(200).cookie("token", token,option).json({
        message: "Logged In Successfully",
        success: true,
        token,
        user
      })
    }
  } catch (error) {
    {
      console.error("Error Logging In:", error);
      res.status(500).json({ error: "An error occurred while Logging In" });
    }
  }
});

app.post("/api/profile", async(req, res) => {
  try {
    const data = req.body
    const email = data.email;
    const verifyUser = await User.findOne({ email: email });
    
    if (verifyUser.isVerified == null ) {
      return res
        .status(400)
        .send({ error: "User with this email is not verified." });
    }

    const userData = await User.findOneAndUpdate(
      { email: email },
      { firstName: data.fName,
        lastName: data.lName,
        phone: data.phone
      },
      { new: true }
    );
    userData.password = undefined;  
    res.status(201).json({ message: "Profile Updated", userData });
  } catch (error) {
    {
      console.error("Error Logging In:", error);
      res.status(500).json({ error: "An error occurred while Logging In" });
    }
  }
})

app.get('/data/:id', verifyToken,async(req, res) => {
  try {
    const { id } = req.params;
    if(id){
      const userData = await User.findOne({ _id : id });
      userData.password = undefined;
      res.status(201).json({ message: "user found", userData });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
    

  } catch (error) {
    {
      console.error("Error Logging In:", error);
      res.status(500).json({ error: "An error occurred while Logging In" });
    }
  }
});

app.post('/meetingData/:id',verifyToken, async(req,res) =>{
  try {
    const data = req.body.formData
    console.log("data =>",data)
    const meetingData = await MeetingModel.create({
      TopicName: data.TopicName,
      InstructorName: data.InstructorName,
      SelectBatch: data.SelectBatch,
      MeetingDate: data.MeetingDate,
      MeetingTime: data.MeetingTime,
      ClassLink: data.ClassLink,
      InstructorId: data._id,
    });
    console.log("meetingData =>",meetingData);
    res.status(201).json({ message: "Meeting Saved successfully", meetingData });
  } catch (error) {
    
  }
})

app.get('/meetingData',async(req, res) => {
  const meetingData = await MeetingModel.find({});
  res.status(201).json({ message: "Meeting Data", meetingData });
})

app.get("/testmessage", async(req, res) => {
  return res.status(201).json({ success: "Server is Up" });
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});