

//var moment = require('moment')
var authors = require('../models/author')

function _GetAllAuthors() {
   return authors.find({})
}


exports.GetAllAuthors = function(req, res, next) {
    _GetAllAuthors().exec(function(err, results) {
        res.render('authors', { title: 'Liste des Auteurs', error: [], author_list:results});
    })
}

exports.APIGetAllAuthors = function(req, res, next) {
    _GetAllAuthors().exec(function(err, results) {
        r2 = [];
        results.forEach((r) => {
            r.age = r.lifespan
            r2.push(r)
        })
        res.send(r2);
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