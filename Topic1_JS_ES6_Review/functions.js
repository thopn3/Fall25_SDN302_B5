// Khai báo đối tượng chứa dữ liệu từ data.json
const data = require('./data.json');

// 1. Liệt kê các cuốn sách theo tác giả và sắp xếp sách theo thứ tự giảm dần của rating
const getBooksByAuthorName = (authorName) => {
    // Lấy dữ liệu 'books' từ data
    const books = data.books;
    // Lọc ra các cuốn sách có authorName = parameterValue
    const resultBooks = books?.filter(b => b.authors.some(a => a.name.includes(authorName)))
                              .sort((b1, b2) => b2.rating - b1.rating);
    
    // Duyệt từng đối tượng của mảng resultBooks và trả về mảng với các phần tử mới (sau khi đã tùy biến output theo yêu cầu)
    const formattedBooks = resultBooks?.map(b => ({
        "bookId": b.id,
        "bookTitle": b.title,
        "release": b.releaseYear,
        "rating": b.rating,
        "authors": b.authors?.map(a => ({"authId": a.id, "authName": a.name})),
        "publisher": {"pubId": b.publisher.id, "pubName": b.publisher.name}
    }));
    
    console.dir(formattedBooks, {depth:null});
}

// 2. 


// Export module
module.exports = {
    getBooksByAuthorName
}