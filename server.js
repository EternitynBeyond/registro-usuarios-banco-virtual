const express = require('express');  // Ensure this line is present
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    res.status(201).json({
        message: 'User registered successfully!',
        user: { username, email, password }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required!' });
    }

    res.status(200).json({
        message: 'Login successful!',
        user: { email, password }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
