import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface ISurvey extends Document {
  surveyId: string;
  title: string;
  description: string;
  color: "purple" | "blue" | "gray" | "orange";
  createdAt: Date;
}

const surveySchema = new Schema<ISurvey>(
  {
    surveyId: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: {
      type: String,
      enum: ["purple", "blue", "gray", "orange"],
      default: "gray",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default mongoose.model<ISurvey>("Survey", surveySchema);
