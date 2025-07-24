import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Subject from "@/models/Subject";

export async function GET(req, { params }) {
  await connectDB();
  const subject = await Subject.findById(params.id);
  return NextResponse.json(subject);
}

export async function PUT(req, { params }) {
  await connectDB();
  const body = await req.json();
  const subject = await Subject.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(subject);
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await Subject.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Subject deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete Subject Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

