import express, { Router } from "express";
import QuoteModel from "../db/QuoteModel";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const quotes = await QuoteModel.find();
    res.status(200).json(quotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const quoteId = req.params.id;
  try {
    const quote = await QuoteModel.findById(quoteId);
    res.status(200).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post("/", async (req, res) => {
  const newQuote = new QuoteModel({
    quoteText: req.body.quoteText,
    quoteAuthor: req.body.quoteAuthor,
    quoteSource: req.body.quoteSource,
    quoteYear: req.body.quoteYear,
    createdAt: Date.now(),
    savedBy: req.body.savedBy,
  });
  try {
    const savedQuote = await newQuote.save();
    console.log(`${savedQuote} saved`);
    res.status(201).json({ message: "Quote created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/", async (req, res) => {
  const quoteId = req.body.quoteId;
  try {
    const deletedQuote = await QuoteModel.findByIdAndDelete(quoteId);
    res.status(200).json(`you deleted a quote successfully`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/", async (req, res) => {
  const quoteId = req.body.quoteId;

  const quoteToUpdate = await QuoteModel.findById(quoteId);
  if (!quoteToUpdate) {
    return res.status(404).json({ message: "Quote not found" });
  }
  const updateQuote = {
    quoteText: req.body.quoteText,
    quoteAuthor: req.body.quoteAuthor,
    quoteSource: req.body.quoteSource,
    quoteYear: req.body.quoteYear,
  };
  try {
    QuoteModel.findByIdAndUpdate(quoteId, updateQuote);
    res.status(200).json({ message: "Quote updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { router as quoteRouter };
