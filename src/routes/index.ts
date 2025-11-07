import { Router } from 'express';
import surveyRoutes from '../modules/surveys/survey.routes';
import questionRoutes from '../modules/questions/question.routes';
import answerRoutes from '../modules/answers/answer.routes';

const router = Router();

router.use('/surveys', surveyRoutes);
router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);

export default router;
