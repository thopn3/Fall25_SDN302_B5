const express = require('express');
const bookController = require('../controllers/books.controller');

// Khai báo đối tượng cho phép định tuyến tới các chức năng làm việc với dữ liệu
const router = express.Router(); // Express thu nhỏ
router.use(express.json());

// GET / - Get all books includes Author and Publisher
router.get('/', bookController.getBooks);
// GET /:id - Get a single Book
router.get('/:id', bookController.getBookDetails);
// GET /:id/author/:auId - Get details of author theo auId tham gia viết cuốn sách có :id tương ứng
router.get('/:id/author/:auId', bookController.getAuthorDetailByBookId);


module.exports = router;