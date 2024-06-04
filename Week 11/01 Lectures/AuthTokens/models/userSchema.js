import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Lastname is required'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);
