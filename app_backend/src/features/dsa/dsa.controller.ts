import { Request, Response } from "express";

import { asyncHandler } from "../../utils/asyncHandler";

import { successResponse } from "../../utils/response";

import { getDSADataService } from "./dsa.service";

export const getDSADataController =
  asyncHandler(
    async (req: Request, res: Response) => {
      const userId = (req as any)?.user?.id as string;

      const data =
        await getDSADataService(userId);

      res.status(200).json(
        successResponse(
          "DSA sheet fetched successfully",
          data
        )
      );
    }
  );