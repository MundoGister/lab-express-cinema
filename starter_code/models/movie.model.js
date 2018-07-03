const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required:true
    },
    stars: {
        type: Array,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    showTimes: {
        type: Array,
        required: false
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;