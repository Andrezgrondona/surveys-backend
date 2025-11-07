import Answer from "./answer.model";

export const createAnswer = async (data: any) => {
  const exists = await Answer.findOne({
    questionId: data.questionId,
    userId: data.userId,
  });

  if (exists) {
    throw new Error("El usuario ya respondió esta pregunta");
  }

  const answer = new Answer(data);
  return await answer.save();
};

export const getAnswersBySurvey = async (surveyId: string) => {
  return await Answer.find({ surveyId });
};

export const getResultsBySurvey = async (surveyId: string) => {
  const results = await Answer.aggregate([
    { $match: { surveyId } },
    {
      $group: {
        _id: { questionId: "$questionId", response: "$response" },
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: "$_id.questionId",
        results: {
          $push: { response: "$_id.response", count: "$count" },
        },
      },
    },
  ]);
  return results;
};

export const getAllResults = async () => {
  const results = await Answer.aggregate([
    {
      $group: {
        _id: {
          surveyId: "$surveyId",
          questionId: "$questionId",
          response: "$response",
        },
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: "$_id.surveyId",
        questions: {
          $push: {
            questionId: "$_id.questionId",
            response: "$_id.response",
            count: "$count",
          },
        },
      },
    },
  ]);

  return results;
};
