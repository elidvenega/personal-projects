import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

const emojis = [
  {
    id: 1,
    emoji: "😄",
  },
  {
    id: 2,
    emoji: "🧵",
  },
  {
    id: 3,
    emoji: "🧝🏼‍♀️",
  },
  {
    id: 4,
    emoji: "🧙🏽‍♂️",
  },
  {
    id: 5,
    emoji: "🐛",
  },
   {
    id: 6,
    emoji: "😄",
  },
   {
    id: 7,
    emoji: "🧙🏽‍♂️",
  },
];

app.get("/emoji", (req, res) => {
  const randomEmoji = Math.floor(Math.random() * emojis.length);

  res.json(emojis[randomEmoji]);
});

app.listen(PORT, () => {
  console.log(`Server will be running on http://localhost:${PORT}`);
});
