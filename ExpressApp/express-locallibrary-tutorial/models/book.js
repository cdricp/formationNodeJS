// Define Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var BookSchema = new Schema ({
    title : { type: String , required: true},
    author : {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
    summary : { type: String , required: true},
    ISBN : String,
    genre : [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}]

})

BookSchema.virtual('url').get(function () {
    return '/catalog/book/' +  this._id
  })


//Compile modele from Schema
module.exports = mongoose.model('Book', BookSchema)
