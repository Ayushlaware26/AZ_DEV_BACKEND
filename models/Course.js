import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  creator: { type: String, required: true }, // Auth0 `sub` usually
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  tags: [{ type: String, trim: true }]
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
