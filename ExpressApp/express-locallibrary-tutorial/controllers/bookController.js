

//var moment = require('moment')
var books = require('../models/book')
var authors = require('../models/author')
var genre = require('../models/genre')
var bookinstance = require('../models/bookinstance')

var async = require('async')

exports.GetAllBooks = function(req, res, next) {
    //res.send('Tous les Books')
    books.find({}, 'title author').populate('author').exec(function(err, results) {
        res.render('books', { title: 'Liste des livres', error: [], book_list:results});
    })
    
}

exports.GetCounts = function (req, res, next)
{
    async.parallel({
        book_count: function(callback) {
            books.count(callback);
        },
        book_instance_count: function(callback) {
            bookinstance.count(callback);
        },
        book_instance_available_count: function(callback) {
            bookinstance.count({status:'Available'},callback);
        },
        author_count: function(callback) {
            authors.count(callback);
        },
        genre_count: function(callback) {
            genre.count(callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
}

exports.GetBook = function(req, res, next) {
    books.findOne({_id : req.params.id}, 'title author').populate('author').exec(function(err, results) {
        res.render('bookbyid', { title: 'Detail livre', error: [], book:results});
    })

}
exports.CreateBook = function(req, res, next) {
    res.send('creation d\'un Book')
}
exports.DeleteBook = function(req, res, next) {
    res.send('delete Book ' + req.params.id)
}
exports.UpdateBook = function(req, res, next) {
    res.send('update Book ' + req.params.id)
}