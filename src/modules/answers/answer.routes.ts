import { Router } from "express";
import { AnswerController } from "./answer.controller";

const router = Router();

router.post("/", AnswerController.create);
router.get("/:surveyId", AnswerController.getBySurvey);
router.get("/:surveyId/results", AnswerController.getResultsBySurvey);
router.get("/results/all", AnswerController.getAllResults);

export default router;
