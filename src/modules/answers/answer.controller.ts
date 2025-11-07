import { Request, Response } from "express";
import * as AnswerService from "./answer.service";

export const AnswerController = {
  create: async (req: Request, res: Response) => {
    try {
      const answer = await AnswerService.createAnswer(req.body);
      res.status(201).json(answer);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  getBySurvey: async (req: Request, res: Response) => {
    const answers = await AnswerService.getAnswersBySurvey(req.params.surveyId);
    res.json(answers);
  },

  getResultsBySurvey: async (req: Request, res: Response) => {
    const results = await AnswerService.getResultsBySurvey(req.params.surveyId);
    res.json(results);
  },

  getAllResults: async (_req: Request, res: Response) => {
    const results = await AnswerService.getAllResults();
    res.json(results);
  },
};
