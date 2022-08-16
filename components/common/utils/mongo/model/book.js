import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Book = new Schema({
  id: { type: String },
  title: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  price: { type: Number },
  authors: { type: String },
  publishedDate: {type: Date},
  language_code:{type: String},
  status:{type:String},
  ratings_count:{type:String},
  page_count: {type: String},
  isbp:{type:String},
  thumbnailUrl: {type: String},
  authors:[{type: String}],
  categories:[{type: String}],

});

mongoose.models = {};

const BookDb = mongoose.model('book', Book);

export default BookDb;

