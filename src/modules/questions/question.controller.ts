import { Request, Response } from "express";
import * as QuestionService from "./question.service";

export const QuestionController = {
  getBySurvey: async (req: Request, res: Response) => {
    try {
      const { surveyId } = req.params;
      const questions = await QuestionService.getQuestionsBySurvey(surveyId);
      res.json(questions);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const question = await QuestionService.createQuestion(req.body);
      res.status(201).json(question);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const updated = await QuestionService.updateQuestion(
        req.params.id,
        req.body
      );
      if (!updated)
        return res.status(404).json({ message: "Pregunta no encontrada" });
      res.json(updated);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const deleted = await QuestionService.deleteQuestion(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Pregunta no encontrada" });
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};
