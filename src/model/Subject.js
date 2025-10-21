import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    nptelUrl: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    // Optional tags for search or filtering (e.g., ["CS", "AI", "NPTEL"])
    tags: [
      {
        type: String,
      },
    ],

    // Reference to PDFs or materials uploaded under this subject
    materials: [
      {
        title: String,
        fileUrl: String,
        summary: String,
      },
    ],

    quizzes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],

    progress: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Subject =
  mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;
