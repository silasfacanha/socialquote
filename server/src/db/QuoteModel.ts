import mongoose from "mongoose";

export interface IQoute extends mongoose.Document {
    quoteText: string;
    quoteAuthor: string;
    quoteSource: string;
    quoteYear: number;
    createdAt: Date;
}

const quoteSchema= new mongoose.Schema<IQoute>({
    quoteText: { type: String, required: true },
    quoteAuthor: { type: String, required: true },
    quoteSource: { type: String, required: true },
    quoteYear: { type: Number, required: true },
    createdAt: { type: Date, required: true }
});

const QuoteModel = mongoose.model<IQoute>("Quote", quoteSchema);

export default QuoteModel;
