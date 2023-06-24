import mongoose from "mongoose";

export interface IPost extends mongoose.Document {
    postText: string;
    postedBy: mongoose.Types.ObjectId;
    sharedQuote: mongoose.Types.ObjectId;
    sharedOraculum: mongoose.Types.ObjectId;
    createdAt: Date;
    likes: number;
    comments: mongoose.Types.ObjectId[];
}

const postSchema: mongoose.Schema = new mongoose.Schema<IPost>({
    postText: { type: String },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sharedQuote: { type: mongoose.Schema.Types.ObjectId, ref: "Quote" },
    sharedOraculum: { type: mongoose.Schema.Types.ObjectId, ref: "Oraculum" },
    createdAt: { type: Date, required: true },
    likes: { type: Number },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const PostModel = mongoose.model<IPost>("Post", postSchema);

export default PostModel;
    
