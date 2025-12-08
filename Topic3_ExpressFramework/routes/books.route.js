const express = require('express');
const bookController = require('../controllers/books.controller');

// Khai báo đối tượng cho phép định tuyến tới các chức năng làm việc với dữ liệu
const router = express.Router(); // Express thu nhỏ
router.use(express.json());

// GET / - Get all books includes Author and Publisher
router.get('/', bookController.getBooks);


module.exports = router;