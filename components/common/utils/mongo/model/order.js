import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Order = new Schema({
  id: { type: String },
  books: [{type:String}]
});

mongoose.models = {};

const OrderDb = mongoose.model('cart', Order);

export default OrderDb;

