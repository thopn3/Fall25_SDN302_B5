const express = require('express');
const {createAuthor} = require('../controllers/author.controller');

const router = express.Router();
router.use(express.json());

// POST /api/authors
router.post('/', createAuthor);

module.exports = router;