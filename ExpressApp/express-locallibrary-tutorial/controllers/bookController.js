

//var moment = require('moment')

exports.GetAllBooks = function(req, res, next) {
    res.send('Tous les Books')
}

exports.GetBook = function(req, res, next) {
    res.send('Lecture Book ' + req.params.id)
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