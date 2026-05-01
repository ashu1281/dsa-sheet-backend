import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());

app.use(express.json());
app.use(errorMiddleware);

app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "DSA Sheet Backend Running",
  });
});

export default app;