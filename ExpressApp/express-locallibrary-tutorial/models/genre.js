
var mongoose = require('mongoose');
// Define Schema
var Schema = mongoose.Schema

var GenreSchema = new Schema ({
    name: { type: String , required: true, min: [3, 'Size matter'], max: 100}
})

GenreSchema.virtual('url').get(function () {
    return '/catalog/genre/' +  this._id
  })

//Compile modele from Schema
module.exports = mongoose.model('Genre', GenreSchema)
