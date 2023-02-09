const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    ensemble: {
        type: Array,
        required: true
    },
    popular: {
        type: Boolean,
        required: true
    }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;

