import express from "express";
import UserModel from "../db/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const existingUser = await UserModel.findOne({ name: req.body.name });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = new UserModel({
    name: req.body.name,
    password: hashedPassword,
    createdAt: Date.now(),
  });
  try {
    const savedUser = newUser.save();
    console.log(`${savedUser} saved`);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/", async (req, res) => {
  const userId = req.body.userId;
  const updateName = { name: req.body.name };

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateName);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/", async (req, res) => {
  const userId = req.body.userId;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (deletedUser) {
      res.status(201).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const existingUser: any = await UserModel.findOne({
    name: req.body.name,
  });
  const match = await bcrypt.compare(req.body.password, existingUser.password);
  if (req.body.name === existingUser.name && match) {
    const token = jwt.sign({ name: existingUser.name }, "secret");
    console.log(token);
    return res.status(200).json({ token, userId: existingUser._id });
  } else {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
});

export { router as userRouter };
