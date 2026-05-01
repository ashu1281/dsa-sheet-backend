import { Router } from "express";

import {
  loginUserController,
  meController,
  registerUserController,
} from "./auth.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.post(
  "/register",
  (req, res, next) => {
    console.log("REGISTER BODY =>", req.body);
    next();
  },
  registerUserController
);

router.post(
  "/login",
  (req, res, next) => {
    console.log("LOGIN BODY =>", req.body);
    next();
  },
  loginUserController
);

router.get(
  "/me",
  authMiddleware,
  meController
);

export default router;