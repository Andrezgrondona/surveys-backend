import { Request, Response } from "express";
import * as SurveyService from "./survey.service";

export const getAllSurveys = async (req: Request, res: Response) => {
  try {
    const surveys = await SurveyService.getAllSurveys();
    res.status(200).json(surveys);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSurveyById = async (req: Request, res: Response) => {
  try {
    const survey = await SurveyService.getSurveyById(req.params.id);
    if (!survey) return res.status(404).json({ message: "Survey not found" });
    res.status(200).json(survey);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createSurvey = async (req: Request, res: Response) => {
  try {
    const newSurvey = await SurveyService.createSurvey(req.body);
    res.status(201).json(newSurvey);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSurvey = async (req: Request, res: Response) => {
  try {
    const updatedSurvey = await SurveyService.updateSurvey(
      req.params.id,
      req.body
    );
    if (!updatedSurvey)
      return res.status(404).json({ message: "Survey not found" });
    res.status(200).json(updatedSurvey);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSurvey = async (req: Request, res: Response) => {
  try {
    const deleted = await SurveyService.deleteSurvey(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Survey not found" });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
