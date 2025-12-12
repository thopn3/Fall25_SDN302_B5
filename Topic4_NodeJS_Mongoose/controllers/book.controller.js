const Book = require('../models/book.model');

const createBook = async (req, resp) => {
    try {
        const {title, releaseYear, authors} = req.body;

        // Kiểm tra authors có thực tế trong collection: authors hay không
        

        const newBook = new Book({
            title: title,
            releaseYear: releaseYear,
            comments: [],
            authors: authors
        });
        // Lưu vào DB
        const savedBooks = await Book.create(newBook);
        if(savedBooks)
            resp.status(201).json({
                message: 'Book create successfully',
                savedBook: {
                    bookId: savedBooks._id,
                    title: savedBooks.title
                }
            })

    } catch (error) {
        resp.status(500).json({error: error.message});
    }
}

// Lấy ra các cuốn sách bao gồm thông tin của các tác giả viết sách
const getBooks = async (req, resp) => {
    try {
        // Cách 1:
        const resultBooks = await Book.find().populate('authors');
        // const books = resultBooks?.map(b => ({
        //     _id: b._id,
        //     title: b.title,
        //     releaseYear: b.releaseYear,
        //     authors: b.authors.map(a => ({
        //         authorName: a.name,
        //         email: a.email
        //     }))
        // }));

        // Cách 2:
        const books = await Book.find().populate({
            path: "authors",
            select: "name email -_id"
        }).select("_id title releaseYear");

        // Check

        // Trả về kết quả
        if(books)
            resp.status(200).json(books);
    } catch (error) {
        resp.status(500).json({error: error.message});
    }
}

module.exports = {
    createBook,
    getBooks
}