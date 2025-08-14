import mongoose from 'mongoose';

const arraySchema = new mongoose.Schema({
  items: {
    type: [String], // Array of strings
    required: true,
    default: [],
  }
}, { timestamps: true });

const ArrayModel = mongoose.model('ArrayModel', arraySchema);

export default ArrayModel;
