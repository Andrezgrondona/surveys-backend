import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  surveyId: mongoose.Types.ObjectId;
  text: string;
  type: "text" | "multiple";
  options?: string[];
}

const questionSchema = new Schema<IQuestion>(
  {
    surveyId: {
      type: Schema.Types.ObjectId,
      ref: "Survey",
      required: true,
    },
    text: { type: String, required: true },
    type: { type: String, enum: ["text", "multiple"], required: true },
    options: {
      type: [String],
      validate: {
        validator: function (v: string[]) {
          return this.type === "multiple" ? v.length <= 4 : true;
        },
        message: "Las preguntas de tipo 'multiple' pueden tener máximo 3 opciones",
      },
    },
  },
  { versionKey: false }
);

export default mongoose.model<IQuestion>("Question", questionSchema);
