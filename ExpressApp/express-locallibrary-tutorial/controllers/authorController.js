

//var moment = require('moment')
var authors = require('../models/author')


exports.GetAllAuthors = function(req, res, next) {
    authors.find({}).exec(function(err, results) {
        res.render('authors', { title: 'Liste des Auteurs', error: [], author_list:results});
    })
}

exports.GetAuthor = function(req, res, next) {
    res.send('Lecture Auteur ' + req.params.id)
}
exports.CreateAuthor = function(req, res, next) {
    res.send('creation d\'un auteur')
}
exports.DeleteAuthor = function(req, res, next) {
    res.send('delete Auteur ' + req.params.id)
}
exports.UpdateAuthor = function(req, res, next) {
    res.send('update Auteur ' + req.params.id)
}