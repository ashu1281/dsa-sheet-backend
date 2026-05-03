import { Request, Response } from "express";

import {
  loginUserService,
  registerUserService,
  findUserByEmailService
} from "./auth.service";

import { asyncHandler } from "../../utils/asyncHandler";

import {
  successResponse,
} from "../../utils/response";

export const registerUserController =
  asyncHandler(
    async (req: Request, res: Response) => {
      console.log(req.body);
      const { name, email, password } =
        req.body;

      const data =
        await registerUserService(
          name,
          email,
          password
        );

      res.status(201).json(
        successResponse(
          "User registered successfully",
          data
        )
      );
    }
  );

export const loginUserController =
  asyncHandler(
    async (req: Request, res: Response) => {
      const { email, password } = req.body;

      const data =
        await loginUserService(
          email,
          password
        );

      res.status(200).json(
        successResponse(
          "Login successful",
          data
        )
      );
    }
  );

export const meController =
  asyncHandler(
    async (req: Request, res: Response) => {
      const data = await findUserByEmailService(req?.user?.email ?? "");
      res.status(200).json(
        successResponse(
          "User fetched successfully",
          data.user
        )
      );
    }
  );