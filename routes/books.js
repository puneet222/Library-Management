const express = require("express");

const Book = require("../models/Book");
const auth = require("../middleware/auth");

const router = express.Router();

// @route       POST api/books
// @desc        Create Book
// @access      Private
router.post(
  "/",
  async (req, res) => {

    const { name, author, description } = req.body;

    try {
      const newBook = new Book({
        name,
        author,
        description
      });
      let book = await newBook.save();
      res.json(book);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
);

// @route       GET api/books
// @desc        Read Books
// @access      Private
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route       PUT api/books/:id
// @desc        Update Book
// @access      Private
router.put("/:id", async (req, res) => {
  const { name, author, description } = req.body;

  const updatedBook = {};
  if (name) updatedBook.name = name;
  if (author) updatedBook.author = author;
  if (description) updatedBook.description = description;

  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      res.status(400).json({ msg: "Book not found" });
    }
    book = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: updatedBook },
      {
        new: true
      }
    );
    res.json({ book });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route       DELETE api/books/:id
// @desc        Delete Book
// @access      Private
router.delete("/:id", async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      res.status(400).json({ msg: "Book not found" });
    }
    await Book.findByIdAndRemove(req.params.id);
    res.json({ msg: "Successfully deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
