const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// API endpoint
app.get('/api/name', (req, res) => {
    res.json({ name: 'Abishek' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
