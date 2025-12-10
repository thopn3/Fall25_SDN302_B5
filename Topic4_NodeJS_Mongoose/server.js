const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

app.get('/', async(req, res)=>{
    try {
        res.send({message: 'Welcome to Practical Exam!'});
    } catch (error) {
        res.send({error: error.message});
    }
});

app.use('/api/authors', require('./routes/author.route'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        connectDB();
    }
);