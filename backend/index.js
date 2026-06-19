const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
    res.send('Backend is running successfully!');
});

app.get('/gif', async (req, res) => {
    const gifUrl = req.query.gifUrl;
    if (!gifUrl) {
        return res.status(400).json({
            status: 'error',
            message: 'Must provide gifUrl'
        });
    }

    try {
        // Fetch the GIF from the provided URL
        const response = await fetch(gifUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch GIF: ${response.statusText}`);
        }

        const blob = await response.blob();
        const buffer = await blob.arrayBuffer();
        res.setHeader('Content-Type', 'image/gif');
        return res.status(200).send(Buffer.from(buffer));
    }
    catch (err) {
        console.error("Failed to fetch gif:", err);
        return res.status(500).json({ status: 'error', message: 'Failed to fetch GIF' });
    }


});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
