const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;
require("./db/mongoose");
const User = require("./models/user");

const app = express();
console.log("here", __dirname);
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/api/submit", async (req, res) => {
  try {
    const user = new User(req.body);
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    const userData = await User.create({
      email: user.email,
      password: user.password,
      selectBatch: user.selectBatch,
    });
    // const token = ""
    const token = jwt.sign(
      { id: userData._id, email: userData.email },
      "shhh", // process.env.jwtsecret
      {
        expiresIn: "2h",
      }
    );
    console.log("token", token);
    userData.token = token;
    userData.password = undefined;
    console.log("userData =>", userData);

    res.status(201).json({ message: "Form submitted successfully", userData });
  } catch (error) {
    console.error("Error submitting form:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
