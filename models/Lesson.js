import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: [mongoose.Schema.Types.Mixed], required: true }, // flexible for different block types
  isEnriched: { type: Boolean, default: false }, // AI-enhanced marker
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true }
}, { timestamps: true });

export default mongoose.model('Lesson', lessonSchema);
