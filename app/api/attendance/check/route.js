import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Attendance from "@/models/Attendance";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const subjectId = searchParams.get("subjectId");

    if (!userId || !subjectId) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    const existing = await Attendance.findOne({ userId, subjectId });
    return NextResponse.json({ exists: !!existing });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
