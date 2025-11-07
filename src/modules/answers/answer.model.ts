import mongoose, { Schema, Document } from "mongoose";

export interface IAnswer extends Document {
  surveyId: string;
  questionId: string;
  userId: string;
  response: string;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    surveyId: { type: String, required: true },
    questionId: { type: String, required: true },
    userId: { type: String, required: true },
    response: { type: String, required: true },
  },
  { timestamps: true }
);

AnswerSchema.index({ questionId: 1, userId: 1 }, { unique: true });

export default mongoose.model<IAnswer>("Answer", AnswerSchema);
