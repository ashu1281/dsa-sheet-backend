import { Router } from "express";
import { getLevelCountsController, updateQuestionProgressController } from "./progress.controller";

const router = Router();

router.patch("/question/:questionId",
    updateQuestionProgressController
)

router.get(
  "/levels",
  getLevelCountsController
);

export default router;