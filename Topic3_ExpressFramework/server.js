const express = require("express");
const morgan = require("morgan");
const app = express();

// Sử dụng middleware built-in
app.use(express.json()); // Kiểm soát dữ liệu I/O theo định dạng JSON
// Sử dụng middleware bên thứ 3
app.use(morgan("dev")); // Giám sát hoạt động request từ client

// Định tuyến cho chức năng. Định nghĩa end-point cho chức năng
app.get('/', async(req, resp) => {
    resp.status(200).json({message: 'Welcome to Express Web server'});
});

// Books:
app.use('/api/books', require('./routes/books.route'));

// GET: /books -> get all book. Output: [{id,title,releaseYear,authors,publisher}]. authors: danh sách tên các tác giả. publisher: tên NXB

// GET: /books/:id -> get a book by id. Output: {bookId, title, rYear, authors, publisher}

// GET: /books/author/:author -> get all book by authorName -> Trả về mảng giống YC1


// Kiểm soát các end-point không tồn tại
app.use((req, resp, next)=>{ // hàm mũi tên này chính là 1 middleware dạng customize
    resp.status(500).json({error: "Sorry, that route doesn't exist. Have a nice day!"});
});

const hostname = "localhost";
const port = 9999;

app.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
})