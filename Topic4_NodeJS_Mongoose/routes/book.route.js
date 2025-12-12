const express = require('express');
const {createBook, getBooks} = require('../controllers/book.controller');

const router = express.Router();
router.use(express.json());

// POST /api/books
router.post('/', createBook);

// GET /api/books
router.get('/', getBooks);

module.exports = router;