import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: String,
  time: String,
  year: String,
  semester: String,
  totalStudents: Number,
});

export default mongoose.models.Subject || mongoose.model('Subject', subjectSchema);
