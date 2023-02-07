const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: true
    },
    ensemble: {
        type: Array,
        required: true
    }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;

