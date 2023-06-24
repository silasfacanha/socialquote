import express from "express";
import PostModel from "../db/PostModel";


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/", async (req, res) => {
    console.log(req.body);
    const newPost = new PostModel({
        postText: req.body.postText,
        postedBy: req.body.postedBy,
        sharedQuote: req.body.sharedQuote,
        sharedOraculum: req.body.sharedOraculum,
        createdAt: Date.now(),
        likes: req.body.likes,
        comments: req.body.comments,
    });
    try {
        const savedPost = await newPost.save();
        console.log(`${savedPost} saved`);
        res.status(201).json({ message: "Post created successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);

router.delete("/", async (req, res) => {
    const postId = req.body.postId;
    try {
        const deletedPost = await PostModel.findByIdAndDelete(postId);
        res.status(200).json(`you deleted a post successfully`);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
);

router.put("/", async (req, res) => {   
    const postId = req.body.postId;
    const postToUpdate = await PostModel.findById(postId);
    if (!postToUpdate) {
        res.status(404).json({ message: "Post not found" });
        return;
    }
    const updatePost = {
        postText: req.body.postText,
        postedBy: req.body.postedBy,
        sharedQuote: req.body.sharedQuote,
        sharedOraculum: req.body.sharedOraculum,
        likes: req.body.likes,
        comments: req.body.comments,
    };
    try {
        const updatedPost= await PostModel.findByIdAndUpdate(postId, updatePost, { new: true });   
        res.status(200).json(`You updated a post successfully`);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
);

export { router as postRouter}
        

        
        