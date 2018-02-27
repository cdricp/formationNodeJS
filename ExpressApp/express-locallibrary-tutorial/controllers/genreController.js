

//var moment = require('moment')

exports.GetAllGenres = function(req, res, next) {
    res.send('Tous les Genres')
}

exports.GetGenre = function(req, res, next) {
    res.send('Lecture Genre ' + req.params.id)
}
exports.CreateGenre = function(req, res, next) {
    res.send('creation d\'un Genre')
}
exports.DeleteGenre = function(req, res, next) {
    res.send('delete Genre ' + req.params.id)
}
exports.UpdateGenre = function(req, res, next) {
    res.send('update Genre ' + req.params.id)
}