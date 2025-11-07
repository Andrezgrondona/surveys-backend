import { Router } from "express";
import { QuestionController } from "./question.controller";

const router = Router();

router.get("/:surveyId", QuestionController.getBySurvey);
router.post("/", QuestionController.create);
router.put("/:id", QuestionController.update);
router.delete("/:id", QuestionController.delete);

export default router;
