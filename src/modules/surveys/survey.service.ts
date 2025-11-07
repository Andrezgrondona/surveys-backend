import Survey from "./survey.model";

export const createSurvey = async (data: any) => {
  const survey = new Survey(data);
  return await survey.save();
};

export const getAllSurveys = async () => {
  return await Survey.find();
};

export const getSurveyById = async (id: string) => {
  return await Survey.findById(id);
};

export const updateSurvey = async (id: string, data: any) => {
  return await Survey.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSurvey = async (id: string) => {
  return await Survey.findByIdAndDelete(id);
};
