const mongoose = require('mongoose');

// Định nghĩa 1 cấu trúc dữ liệu cho document Author
const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Author name is required"]},
    birthYear: Number,
    email: String,
    phone: String
}, {timestamps:true}); // timestamps: createdAt và updatedAt

// Tạo model
const Author = mongoose.model('author', AuthorSchema); // collection: authors

// Xuất bản model
module.exports = Author;