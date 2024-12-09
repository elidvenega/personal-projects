const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const quotes = [
    { id: 1, text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { id: 2, text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { id: 3, text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { id: 4, text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
];

// API route to fetch a random quote
app.get("/api/quote", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
