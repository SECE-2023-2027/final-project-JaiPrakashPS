import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema);
