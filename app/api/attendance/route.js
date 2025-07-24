import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Attendance from "@/models/Attendance";

export async function POST(req) {
  try {
    await connectDB();

    const { userId, subjectId } = await req.json();
    if (!userId || !subjectId) {
      return NextResponse.json({ error: "Missing userId or subjectId" }, { status: 400 });
    }

    const existing = await Attendance.findOne({ userId, subjectId });
    if (existing) {
      return NextResponse.json({ message: "Attendance already marked" }, { status: 200 });
    }

    const attendance = await Attendance.create({
      userId,
      subjectId,
      date: new Date(),
    });

    return NextResponse.json({ message: "Attendance marked", attendance }, { status: 201 });
  } catch (error) {
    console.error("Attendance API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
