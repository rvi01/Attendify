const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const port = process.env.PORT || 8000;
require("./db/mongoose");
const User = require("./models/user");

const app = express();
console.log("here",__dirname)
app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post('/api/submit', async (req, res) => {
    try 
    {
        const user = new User(req.body);
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword
        console.log("user =>",user)
        await user.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } 
    catch (error) 
    {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});