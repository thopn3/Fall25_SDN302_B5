const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: {type: String, maxLength: [100, 'Nội dung bình luận không vượt quá 100 kí tự']},
    rating: {
        type: Number,
        min: [1, 'Điểm đánh giá phải lớn hơn hoặc bằng 1'],
        max: [5, 'Điểm đánh giá phải nhỏ hơn hoặc bằng 5'],
    },
});

const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    releaseYear: {type: Date, default: Date.now},
    rating: {type: Number, default:0},
    comments: [CommentSchema], // 1 - m: Embeded
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'author'
        }
    ], // 1 - m: Reference
    publisher: {
        pubId: {type: mongoose.Schema.Types.ObjectId, ref: 'publisher'},
        name: String
    }
});

module.exports = mongoose.model('book', BookSchema);