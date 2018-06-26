const mongoose = require('mongoose');
const movieModel = require('../models/movie.model');
const movies = require('./movies.data');

movieModel.insertMany(movies)
    .then( () => {
        console.info("Ready");
    })
    .catch(error => next(error));