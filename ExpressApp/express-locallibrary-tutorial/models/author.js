// Define Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var datesUtils = require('../utils/dates');

var AuthorSchema = new Schema ({
    first_name : { type: String , required: true},
    family_name : { type: String , required: true},
    date_of_birth : { type: Date , required: true},
    date_of_death : Date,

})

AuthorSchema.virtual('url').get(function () {
    return '/catalog/author/' +  this._id
  })

AuthorSchema.virtual('name').get(function () {
    return this.first_name + ' ' + this.family_name
  })

AuthorSchema.virtual('lifespan').get(function () {
    return datesUtils.CalcLifeSpan(this.date_of_birth, this.date_of_death);
  })

//Compile modele from Schema
module.exports = mongoose.model('Author', AuthorSchema)
