import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Book = new Schema({
  id: { type: String },
  bookID: { type: number },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  authors: { type: String },
  publication_date: {type: Date},
  language_code:{type: String},
  publisher:{type:String},
  ratings_count:{type:String},
  average_rating: {type: String}
});

mongoose.models = {};

const BookDb = mongoose.model('book', Book);

export default BookDb;

