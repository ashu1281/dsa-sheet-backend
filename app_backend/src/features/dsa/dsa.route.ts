import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware";

import { getDSADataController } from "./dsa.controller";

const router = Router();

router.get(
  "/",
  authMiddleware,
  getDSADataController
);

export default router;