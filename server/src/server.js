const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
var cookieParser = require('cookie-parser')
const port = process.env.PORT || 8000;
require("./db/mongoose");
const User = require("./models/user");

const app = express();
console.log("here",__dirname)
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/api/submit', async (req, res) => {
    try 
    {
        const user = new User(req.body);

        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            return res.status(400).send({ error: 'User with this email already exists.' });
        }

        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword

        const userData = await User.create({
            email : user.email,
            password : user.password,
            selectBatch: user.selectBatch,
            rememberMe: user.rememberMe
        })

        const token = jwt.sign(
            {id : userData._id, email: userData.email},
            'shhh', // process.env.jwtsecret
            {
                expiresIn: "2h"
            }
        );
        
        userData.token = token
        userData.password = undefined

        res.status(201).json({ message: 'Form submitted successfully',userData});
    } 
    catch (error) 
    {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
});

app.post('/api/login', async(req, res) => {
    try {
        const loginEmail = req.body.email;
        const user = await User.findOne({ email : loginEmail });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const password = user.password;
        const isPasswordValid = await bcrypt.compare(req.body.password, password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(201).json({ message: 'Logged In Successfully',user});
    } catch (error) {
        {
            console.error('Error Logging In:', error);
            res.status(500).json({ error: 'An error occurred while Logging In' });
        }
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});