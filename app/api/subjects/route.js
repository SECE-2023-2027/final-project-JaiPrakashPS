import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";
import Subject from "@/models/Subject";

export async function GET() {
  await connectDB();
  const subjects = await Subject.find({});
  return NextResponse.json(subjects);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const subject = await Subject.create(body);
  return NextResponse.json(subject);
}
