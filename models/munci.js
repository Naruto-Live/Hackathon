const mongoose = require('mongoose');

// Schema
const munciSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    locat: {
        type: String,
        required: true
    },
});


const Munci = mongoose.model('Muncis' , munciSchema );

module.exports = Munci;