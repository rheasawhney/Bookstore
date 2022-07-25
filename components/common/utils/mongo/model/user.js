import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const user = new Schema({
  id: { type: String },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileId: { type: String },
});

mongoose.models = {};

const UserDb = mongoose.model('User', user);

export default UserDb;
