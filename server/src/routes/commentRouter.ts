import express, { Router } from "express";
import CommentModel from "../db/CommentModel";

const router = express.Router();

router.get("/", async (req, res) => {   
    const postId = req.body.postId;
    try {
        const comments = await CommentModel.find({ postId: postId });
        res.status(200).json(comments);

    }
    catch (error) {
        console.log(error);
       res.status(500).json({ message: "Internal Server Error" });
    }
    }
);

router.post("/", async (req, res) => {
    const newComment = new CommentModel({
    commentText: req.body.commentText,
    commentedBy: req.body.commentedBy,
    commentedPost: req.body.commentedPost,
    createdAt: Date.now(),
    likes: req.body.likes,





    });
    try {
        const savedComment = await newComment.save();
        console.log(`The comment "${savedComment.commentText}" was saved`);
        res.status(201).json({ message: "Comment created successfully" });
    }
    
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);


router.delete("/", async(req, res) => {
    const commentId = req.body.commentId;

    try{

        const deletedComment = await CommentModel.findByIdAndDelete(commentId);
        res.status(200).json(`You deleted a comment successfully`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });

    }
}
);

router.put("/", async(req, res) => {
    const commentId = req.body.commentId;
    const updateComment={
        commentText: req.body.commentText,
        commentedBy: req.body.commentedBy,
        postId: req.body.postId,
        likes: req.body.likes,
    }
    const commentToUpdate = await CommentModel.findById(commentId);
    if (!commentToUpdate) {
        res.status(404).json({ message: "Comment not found" });
        return;
    }
    try { const updatedComment = await CommentModel.findByIdAndUpdate(commentId, updateComment, { new: true });
        res.status(200).json(updatedComment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
);

export {router as commentRouter}
