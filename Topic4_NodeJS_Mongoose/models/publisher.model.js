const mongoose = require('mongoose');

// Định nghĩa 1 cấu trúc dữ liệu cho document Publisher
const PublisherSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Publisher name is required"]},
    phone: String,
    address: String
}, {timestamps:true}); // timestamps: createdAt và updatedAt

// Tạo model
const Publisher = mongoose.model('publisher', PublisherSchema); 

// Xuất bản model
module.exports = Publisher;