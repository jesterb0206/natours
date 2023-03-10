import mongoose from 'mongoose';

const errorSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  error: {
    type: Object,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
  },
});

const ErrorStack = mongoose.model('ErrorStack', errorSchema);

export default ErrorStack;
