import Question from "./question.model";
import Survey from "../surveys/survey.model";

export const createQuestion = async (data: any) => {
  const survey = await Survey.findById(data.surveyId);
  if (!survey) throw new Error("Encuesta no encontrada");

  const count = await Question.countDocuments({ surveyId: data.surveyId });
  if (count >= 5) throw new Error("Una encuesta solo puede tener máximo 5 preguntas");

  const question = new Question(data);
  return await question.save();
};

export const getQuestionsBySurvey = async (surveyId: string) => {
  return await Question.find({ surveyId });
};

export const updateQuestion = async (id: string, data: any) => {
  return await Question.findByIdAndUpdate(id, data, { new: true });
};

export const deleteQuestion = async (id: string) => {
  return await Question.findByIdAndDelete(id);
};
