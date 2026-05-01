import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.middleware";
import dsaRouter from "./features/dsa/dsa.route"
import authRouter from "./features/auth/auth.route"
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(errorMiddleware);

// app.get("/", (_, res) => {
//   res.status(200).json({
//     success: true,
//     message: "DSA Sheet Backend Running",
//   });
// });

app.use("/api/auth",authRouter);
app.use("/api/dsa-sheet",dsaRouter);

export default app;