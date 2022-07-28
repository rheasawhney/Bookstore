import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Author = new Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  author: { type: String },
  releaseDate: {type: Date},
  reviews: [{type: String}],
  comments: [{type: String}]
});

mongoose.models = {};

const AuthorDb = mongoose.model('author', author);

export default AuthorDb;
