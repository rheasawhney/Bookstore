import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Queries = new Schema({
  id: { type: String },
  email: { type: String },
  name: {type: String},
  subject: { type: String },
  message: { type: String }
});

mongoose.models = {};

const QueriesDb = mongoose.model('query', Queries);

export default QueriesDb;

