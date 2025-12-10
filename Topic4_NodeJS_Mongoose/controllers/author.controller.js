const Author = require('../models/author.model');

// Actions: CRUD -> Author model
// 1. Create a new Author
const createAuthor = async(req, resp) => {
    try {
        // if(req.body.name==null)
        //     return resp.status(400).json({message: 'Chưa có dữ liệu đầu vào'});

        // Lấy dữ liệu từ body của đối tượng request (được gửi từ client)
        const newAuthor = new Author({
            name: req.body.name,
            birthYear: req.body.birthYear,
            email: req.body.email,
            phone: req.body.phone
        });

        // Lưu dữ liệu vào DB
        await newAuthor.save().then(newDoc => {
            resp.status(201).json({
                message: "Author created",
                newAuthor: {
                    authorId: newDoc._id,
                    authorName: newDoc.name,
                    email: newDoc.email
                }
            });
        }).catch(error => resp.status(400).json({error: error.message}));
    } catch (error) {
        resp.status(500).json({error: error.message});
    }
}

module.exports = {
    createAuthor
}