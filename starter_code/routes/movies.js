var express = require('express');
var router = express.Router();
const movieController = require('../controller/movie.controller')

/* GET users listing. */
router.get('/movies', (req, res, next) => {
  movieController.list()
  // res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
  movieController.views()
});

module.exports = router;
