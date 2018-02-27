

//var moment = require('moment')

exports.GetAllBookInstances = function(req, res, next) {
    res.send('Tous les BookInstances')
}

exports.GetBookInstance = function(req, res, next) {
    res.send('Lecture BookInstance ' + req.params.id)
}
exports.CreateBookInstance = function(req, res, next) {
    res.send('creation d\'un BookInstance')
}
exports.DeleteBookInstance = function(req, res, next) {
    res.send('delete BookInstance ' + req.params.id)
}
exports.UpdateBookInstance = function(req, res, next) {
    res.send('update BookInstance ' + req.params.id)
}