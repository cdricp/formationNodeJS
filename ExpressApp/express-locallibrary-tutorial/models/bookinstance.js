
var mongoose = require('mongoose');
// Define Schema
var Schema = mongoose.Schema

var BookInstanceSchema = new Schema ({
    book : {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    imprint : String ,
    status : {
        type: String,
        enum : ['Available','Loaned', 'Maintenance'],
        default: 'Available'
    },
    due_back : Date
})

BookInstanceSchema.virtual('url').get(function () {
    return '/catalog/bookinstance/' +  this._id
  })
  BookInstanceSchema.virtual('due_back_formatted').get(() => {
      return MongooseDocument(this.due_back).format('MMMM Do, YYYY')
  })

//Compile modele from Schema
module.exports = mongoose.model('BookInstance', BookInstanceSchema)
