const mongoose = require('mongoose');
const movieModel = require('../models/movie.model');
const movies = require('./movies.data');

// Connect to BBDD
require('../configs/db.config');

movieModel.insertMany(movies)
    .then( data => {
        console.info("Ready");
        mongoose.connection.close(); // Close connection
    })
    .catch(error => next(error));