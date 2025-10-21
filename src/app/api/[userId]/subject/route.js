import dbConnect from "@/lib/dbConnect";
import Subject from "@/model/Subject";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await dbConnect();

    const { userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized", details: "User not authenticated" },
        { status: 401 }
      );
    }

    const subjects = await Subject.find({
      userId,
    }).sort({ createdAt: -1 });

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

export const POST = async (req, { params }) => {
  try {
    await dbConnect();
    const { userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized", details: "User not authenticated" },
        { status: 401 }
      );
    }

    const { title, description, nptelUrl } = await req.json();
  } catch (err) {
    return NextResponse.json(
      {
        error: "Failed to create subject",
        details: err.message,
      },
      { status: 500 }
    );
  }
};
