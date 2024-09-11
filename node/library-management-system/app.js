import express from "express";

// What is body oarser
// it parses a json string and returns an object
import bodyParser from "body-parser";

// Data of current books
const books = [
  {
    bookName: "Rudest Book Ever",
    bookAuthor: "Shwetabh Gangwar",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
  {
    bookName: "Do Epic Shit",
    bookAuthor: "Ankur Wariko",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available",
  },
];

const app = express();
// Code to get static files like CSS
app.use(express.static("public"));

app.set("view engine", "ejs");

// use is set to use middlewear function
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// list of books that will be ready when page is downloaded
app.get("/", function (req, res) {
  res.render("home", {
    data: books,
  });
});

// Entries that are being made for new books
app.post("/", (req, res) => {
  const inputBookName = req.body.bookName;
  const inputBookAuthor = req.body.bookAuthor;
  const inputBookPages = req.body.bookPages;
  const inputBookPrice = req.body.bookPrice;

  books.push({
    bookName: inputBookName,
    bookAuthor: inputBookAuthor,
    bookPages: inputBookPages,
    bookPrice: inputBookPrice,
    bookState: "Available",
  });

  res.render("home", {
    data: books,
  });
});

// Book that has been checked out
app.post("/issue", (req, res) => {
  let requestedBookName = req.body.bookName;
  books.forEach((book) => {
    if (book.bookName == requestedBookName) {
      book.bookState = "Issued";
    }
  });
  res.render("home", {
    data: books,
  });
});

// For returning books that need to be returned
app.post("/return", (req, res) => {
  // setting variable
  let requestedBookName = req.body.bookName;
  // loop through object
  books.forEach((book) => {
    if (book.bookName == requestedBookName) {
      book.bookState = "Available";
    }
  });
  res.render("home", {
    data: books,
  });
});

//To delete books
app.post("/delete", (req, res) => {
  let requestedBookName = req.body.bookName;
  let j = 0;
  books.forEach((book) => {
    j = j + 1;
    if (book.bookName === requestedBookName) {
      books.splice(j - 1, 1);
    }
  });
  res.render("home", {
    data: books,
  });
});

app.listen(3000, (req, res) => {
  console.log("App is running on port 3000");
});


