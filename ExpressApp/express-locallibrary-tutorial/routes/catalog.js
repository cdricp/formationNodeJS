var express = require('express')
var router = express.Router()

var authorController = require('../controllers/authorController')
var genreController = require('../controllers/genreController')
var bookController = require('../controllers/bookController')
var bookInstanceController = require('../controllers/bookInstanceController')

/* GET users listing. */
router.get('/',bookController.GetCounts)

router.get('/authors',authorController.GetAllAuthors)
router.route('/author/create').get(authorController.CreateAuthor)
router.route('/author/:id').get(authorController.GetAuthor)
router.route('/author/:id/update').get(authorController.UpdateAuthor)
router.route('/author/:id/delete').get(authorController.DeleteAuthor)

router.get('/books',bookController.GetAllBooks)
router.route('/book/create').get(bookController.CreateBook)
router.route('/book/:id').get(bookController.GetBook)
router.route('/book/:id/update').get(bookController.UpdateBook)
router.route('/book/:id/delete').get(bookController.DeleteBook)

router.get('/bookinstances',bookInstanceController.GetAllBookInstances)
router.route('/bookinstance/create').get(bookInstanceController.CreateBookInstance)
router.route('/bookinstance/:id').get(bookInstanceController.GetBookInstance)
router.route('/bookinstance/:id/update').get(bookInstanceController.UpdateBookInstance)
router.route('/bookinstance/:id/delete').get(bookInstanceController.DeleteBookInstance)

router.get('/genres',genreController.GetAllGenres)
router.route('/genre/create').get(genreController.CreateGenre)
router.route('/genre/:id').get(genreController.GetGenre)
router.route('/genre/:id/update').get(genreController.UpdateGenre)
router.route('/genre/:id/delete').get(genreController.DeleteGenre)

module.exports = router;
