import express from "express";
import mongoose from "mongoose";
import cors from "cors";


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




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});