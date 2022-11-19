import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const user = new Schema({
  id: { type: String },
  contact: { type: String},
  email: { type: String, unique: true },
  password: { type: String, required: true },
  photoUrl: { type: String },
  cart: [{type: String}],
  firstName:{ type: String },
  lastName: { type: String },
  gender: { type: String },
  statE: {type: String},
  zipcode: {type: String}
});

mongoose.models = {};

const UserDb = mongoose.model('User', user);

export default UserDb;
