import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Cart = new Schema({
  id: { type: String },
  userId:{type: String},
  books :[{type:String}]
});

mongoose.models = {};

const CartDB = mongoose.model('cart', Cart);

export default CartDB;

