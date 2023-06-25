import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { quoteRouter } from "./routes/quoteRouter";
import { oraculumRouter } from "./routes/oraculumRouter";
import { postRouter } from "./routes/postRouter";
import { commentRouter } from "./routes/commentRouter";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());
mongoose.connect(
  "mongodb+srv://testinguser:studyandpracticeit10times@socialquotecluster.w9tdi9w.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any
);
// app.use(cookieParser());
app.use("/user", userRouter);
app.use("/quote", quoteRouter);
app.use("/oraculum", oraculumRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
