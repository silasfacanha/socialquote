import mongoose, { mongo } from "mongoose";

export interface IQuote extends mongoose.Document {
    quoteText: string;
    quoteAuthor: string;
    quoteSource: string;
    quoteYear: number;
    createdAt: Date;
    savedBy: mongoose.Types.ObjectId;
}

const quoteSchema :mongoose.Schema = new mongoose.Schema<IQuote>({
    quoteText: { type: String, required: true },
    quoteAuthor: { type: String, required: true },
    quoteSource: { type: String, required: true },
    quoteYear: { type: Number, required: true },
    createdAt: { type: Date, required: true }
});

const QuoteModel = mongoose.model<IQuote>("Quote", quoteSchema);

export default QuoteModel;
