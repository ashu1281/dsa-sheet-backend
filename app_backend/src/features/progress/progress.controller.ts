import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { getLevelCountsService, updateQuestionProgressService } from "./progress.service";
import { successResponse } from "../../utils/response";

export const updateQuestionProgressController = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?.id ?? "";
    const questionId =  req.params.questionId as string;
    const { status } = req.body ?? "PENDING";

    const data = await updateQuestionProgressService(userId, questionId, status);

    res.status(200).json(
        successResponse(
            "Question progress updated successfully",
            data
        )
    )
});

export const getLevelCountsController =
  asyncHandler(
    async (req: Request, res: Response) => {

      const userId =
        req.user?.id as string;

      const data =
        await getLevelCountsService(
          userId
        );

      res.status(200).json(
        successResponse(
          "Level counts fetched successfully",
          data
        )
      );
    }
  );