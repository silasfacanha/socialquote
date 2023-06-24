import { Router} from "express";
import express from "express";
import { Model } from "mongoose";
import UserModel from "../db/UserModel";



const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();
//create, delete, update the name of the user.

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

router.put("/update", async (req, res) => {    
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

router.delete("/delete", async(req, res) => {
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
    return res.status(200).json({ message: "User logged in successfully" });
  } else {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
});

export { router as userRouter };
// get all the users vai ao mongo, dá um find e retorna tudo.
// create a user. cria um novo documento no mongo colocando os argumentos da req, hashes o password
// update a user. encontra um usuario, altera por meio dos argumentos da req. 
// delete a user - changes everything that it created. deleta todos os elementos relacionados em outras coleções e deleta o user
// log in - encontra o usuario, compara a senha com bcrypt e entrega o jwt

// get all the user quotes. vão ao mongo e encontram todos as quotes com o userId semelhante a do user. 
// create quote - It also changes the user. Cria um documento de quotes.
// update quote. -encontra uma quote, altera por meio dos argumentos da req. 
// delete quote - It also changes the user and oraculas and posts. busca todos os oraculas e post que possuem o id da quote
//e o remove de lá. 
// get all the oracula of the user -> vai nos oraculas e filtra por userId
// create a new oracula - change the user -> cria um novo documento do oracula- devo adicionar a referencia ao user?
// update a new oracula 
// delete an oracula - It also changes the user and the quotes

// get all the posts 
//get all the posts of a user 
// create a new post - it also changes the user 
// update a post 
// delete a post - it also changes the user

//get the comments related to a post 
//create a new comment - change the user and the post
// update the comment 
// delete the comment - change the user and the post








