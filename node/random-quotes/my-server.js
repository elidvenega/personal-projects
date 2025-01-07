import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

const quotes = [
  {
    id: 1,
    text: `The only limit to our realization of tomorrow is our doubts of today.`,
    author: `Franklin D. Roosevelt`,
  },
  {
    id: 2,
    text: `In the middle of every difficulty lies opportunity.`,
    author: `Albert Einstein`,
  },
  {
    id: 3,
    text: `What you get by achieving your goals is not as important as what you become by achieving your goals.`,
    author: `Zig Ziglar`,
  },
  {
    id: 4,
    text: `Success is not the key to happiness. Happiness is the key to success.`,
    author: `Albert Schweitzer`,
  },
  {
    id: 5,
    text: `I certainly got much more stronger than before. But for some reason,
     I feel like something within me get lost everytime I get stronger.`,
    author: `Solo Leveling`,
  },
];



app.get("/random-quote", (req, res) => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomQuote]);
});

app.listen(PORT, () => {
  console.log(`Your server is in http://localhost:${PORT}`);
});
