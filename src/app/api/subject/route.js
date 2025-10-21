import { authData } from "@/helper/clerk-helper";
import dbConnect from "@/lib/dbConnect";
import Subject from "@/model/Subject";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await dbConnect();

    const subjects = await Subject.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { data: subjects, details: "Subjects fetched successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({
      error: "Failed to fetch subjects",
      details: err.message,
    });
  }
};
