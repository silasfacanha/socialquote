import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {userRouter} from "./routes/userRouter";
import {quoteRouter} from "./routes/quoteRouter";
import { oraculumRouter } from "./routes/oraculumRouter";
import { postRouter } from "./routes/postRouter";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://testinguser:studyandpracticeit10times@socialquotecluster.w9tdi9w.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any
);
app.use("/user", userRouter);
app.use("/quote", quoteRouter);
app.use("/oraculum", oraculumRouter)
app.use("/post", postRouter)







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});