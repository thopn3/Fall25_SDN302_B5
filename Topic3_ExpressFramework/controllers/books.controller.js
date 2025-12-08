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

module.exports = {
    getBooks
}