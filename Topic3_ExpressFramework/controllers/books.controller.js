// Giả định đã có models
const data = require('../data.json');
const {books, authors, publishers} = data;

// Actions
// Get all books
async function getBooks(req, resp){
    try {
        const formattedBooks = await books?.map(b => ({
            id: b?.id,
            title: b?.title,
            releaseYear: b?.releaseYear,
            authors: b?.authors?.map(a => a.name),
            publisher: b?.publisher?.name
        }));

        resp.status(200).json(formattedBooks);
    } catch (error) {
        resp.status(500).json({message: `Error: ${error.message}`});
    }
}

// Get Book details
const getBookDetails = async (req, resp) => {
    try {
        const {id} = req.params;
        const singleBook = await books?.find(b => b.id === id);
        
        if(!singleBook)
            resp.status(404).json({message: 'Not found'});

        const formattedBook = {
            bookId: singleBook.id, 
            title: singleBook.title, 
            rYear: singleBook.releaseYear, 
            authors: singleBook?.authors.map(a => a?.name), 
            publisher: singleBook.publisher.name
        };
        
        resp.status(200).json(formattedBook);
    } catch (error) {
        resp.status(500).json({message: `Error: ${error.message}`});
    }
}

const getAuthorDetailByBookId = async (req, resp)=>{
    try {
        const {id, auId} = req.params;
        // Tìm sách theo id
        const book = await books.find(b => b.id === id);
        
        if(!book)
            resp.status(404).json({message: 'Book not found'});
        
        const author = book.authors.find(a => a.id === auId);
        
        if(!author)
            resp.status(404).json({message: 'Author not found'});

        const authorDetails = authors.find(a => a.id === auId);
        
        resp.status(200).json({
            authorId: authorDetails.id,
            authorName: authorDetails.name,
            birdYead: authorDetails.birthYear
        });
    } catch (error) {
        resp.status(500).json({message: `Error: ${error.message}`});
    }
}

module.exports = {
    getBooks,
    getBookDetails,
    getAuthorDetailByBookId
}