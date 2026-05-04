import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
import dsaRouter from "./features/dsa/dsa.route"
import authRouter from "./features/auth/auth.route"
import progressRouter from "./features/progress/progress.route";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = express();

app.use(
  cors({
    origin: [
      "https://dsa.ashishgaikwad.in",
      "https://www.ashishgaikwad.in"
    ],
    credentials: true,
  })
);
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "DSA Sheet Backend Running",
  });
});

app.use("/api/auth", authRouter);

app.use(
  "/api/dsa-sheet",
  authMiddleware,
  dsaRouter
);

app.use(
  "/api/progress",
  authMiddleware,
  progressRouter
);

app.use(errorMiddleware);

export default app;