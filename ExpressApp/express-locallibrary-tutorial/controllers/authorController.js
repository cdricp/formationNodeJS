

//var moment = require('moment')

exports.GetAllAuthors = function(req, res, next) {
    res.send('Tous les auteurs')
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