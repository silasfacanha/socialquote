import mongoose from "mongoose";

export interface IComment extends mongoose.Document {
    commentText: string;
    commentedBy: mongoose.Types.ObjectId;
    commentedPost: mongoose.Types.ObjectId;
    createdAt: Date;
    likes: number;
}

const commentSchema: mongoose.Schema = new mongoose.Schema<IComment>({
    commentText: { type: String, required: true },
    commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true     },
    commentedPost: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true     },
    createdAt: { type: Date, required: true },
    likes: { type: Number },
});

const CommentModel = mongoose.model<IComment>("Comment", commentSchema);

export default CommentModel;
