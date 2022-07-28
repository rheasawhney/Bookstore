import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const user = new Schema({
  id: { type: String },
  contact: { type: String},
  email: { type: String, unique: true },
  password: { type: String, required: true },
  photoUrl: { type: String },
  cart: [{type: String}],
  order: [{type: String}],
  cancelled:[{type: String}],
  fulfilled:[{type: String}],
});

mongoose.models = {};

const UserDb = mongoose.model('User', user);

export default UserDb;

`16hours`
// Categories
// Book details 
// Cart and checkout
// All other things
// Mobile view and desktop view and create ppt, documentation
