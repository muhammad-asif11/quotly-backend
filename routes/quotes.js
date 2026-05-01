const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');
const auth = require('../middleware/authMiddleware');

// CREATE QUOTE
router.post('/', auth, async (req, res) => {
  const { text, author } = req.body;

  const quote = await Quote.create({
    text,
    author,
    user: req.user.id
  });

  res.json(quote);
});

// GET USER QUOTES
router.get('/', auth, async (req, res) => {
  const quotes = await Quote.find({ user: req.user.id });
  res.json(quotes);
});

module.exports = router;