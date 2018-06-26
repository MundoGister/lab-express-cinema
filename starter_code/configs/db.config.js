const mongoose = require('mongoose');
const DB_NAME = 'movies';
const DB_URI = 'mongodb://localhost/${DB_NAME}';

mongoose.connect(DB_URI)
    .then(
        console.info(`Connected to database: ${DB_URI}`)
    )
    .catch(error => next(error));
