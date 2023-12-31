import mongoose, { Schema, mongo } from "mongoose";

export interface IOraculum extends mongoose.Document {
    oraculumName: string;
    oraculumDescription: string;
    oraculumQuotes: Schema.Types.ObjectId[];
    createdAt: Date;
    savedBy: Schema.Types.ObjectId;
    likes: number;
    
}

const oraculumSchema :mongoose.Schema = new mongoose.Schema<IOraculum>({
    oraculumName: { type: String, required: true },
    oraculumDescription: { type: String},
    oraculumQuotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quote'}],
    createdAt: { type: Date, required: true },
    savedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    likes: { type: Number },
 
});

const OraculumModel = mongoose.model<IOraculum>("Oraculum", oraculumSchema);

export default OraculumModel;