import { Router } from "express";

import { getDSADataController } from "./dsa.controller";

const router = Router();

router.get(
  "/",
  getDSADataController
);

export default router;