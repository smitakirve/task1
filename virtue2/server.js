const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Define routes for each recipe
app.get('/api/recipes', (req, res) => {
    const recipes = [
        { name: 'Dosa', image: 'dosa.jpg', link: 'dosa.html' },
        { name: 'Pasta', image: 'pasta.jpg', link: 'pasta.html' },
        { name: 'Pulav', image: 'pulav.jpg', link: 'pulav.html' },
        { name: 'Mix Veg', image: 'mix_veg.jpg', link: 'mix_veg.html' },
        { name: 'Pav Bhaji', image: 'pav bhaji.jpg', link: 'pav_bhaji.html' }
    ];
    res.json(recipes);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
