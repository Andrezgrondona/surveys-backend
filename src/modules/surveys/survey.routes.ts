import { Router } from "express";
import * as SurveyController from "./survey.controller";

const router = Router();

router.get("/", SurveyController.getAllSurveys);
router.get("/:id", SurveyController.getSurveyById);
router.post("/", SurveyController.createSurvey);
router.put("/:id", SurveyController.updateSurvey);
router.delete("/:id", SurveyController.deleteSurvey);

export default router;
