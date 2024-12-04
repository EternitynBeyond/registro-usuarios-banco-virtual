const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = 'https://exzjreoadutctfflnvay.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4empyZW9hZHV0Y3RmZmxudmF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzA3MTQ2NywiZXhwIjoyMDQ4NjQ3NDY3fQ.RXTYSoIFAoiXqILyvznLAn-kLwGlkUs10x2O7HXoC2E';
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    const { data, error } = await supabase.from('users').insert([{ username, email, password }]);
    if (error) {
        return res.status(500).json({ message: 'Error registering user', error: error.message });
    }
    res.status(201).json({ message: 'User registered successfully!', user: data });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.from('users').select('*').eq('email', email).eq('password', password);
    if (error || !data.length) {
        return res.status(401).json({ message: 'Invalid credentials!' });
    }
    res.status(200).json({ message: 'Login successful!', user: data[0] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
