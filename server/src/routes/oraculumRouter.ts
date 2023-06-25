import express, { Router } from "express";
import OraculumModel from "../db/OraculumModel";

const router = express.Router();


router.get("/", async (req, res) => {   
    const userId = window.localStorage.getItem("userId");
    try {
        const oraculum = await OraculumModel.find({ savedBy: userId });
        res.status(200).json(oraculum);

    } catch (error) {
        console.log(error);
       res.status(500).json({ message: "Internal Server Error" });
    }
    }
);

router.post("/", async (req, res) => {
    const newOraculum= new OraculumModel({
    oraculumName: req.body.oraculumName,
    oraculumDescription: req.body.oraculumDescription,
    oraculumQuotes: req.body.oraculumQuotes,
    createdAt: Date.now(),
    savedBy: req.body.savedBy,
    likes: req.body.likes,
    


    });
    try {
        const savedOraculum= await newOraculum.save();
        console.log(`A oraculum named "${savedOraculum.oraculumName}" was saved`);
        res.status(201).json({ message: "Oraculum created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
);


router.delete("/", async(req, res) => {
    const oraculumId = req.body.oraculumId;

    try{

        const deletedOraculum= await OraculumModel.findByIdAndDelete(oraculumId);
        res.status(200).json(`You deleted a oraculum successfully`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });

    }
});


router.put("/", async (req, res) => {
    const  oraculumId = req.body.oraculumId;
    const oraculumToUpdate = await OraculumModel.findById(oraculumId);
    if (!oraculumToUpdate) {
        return res.status(404).json({ message: "Oraculum not found" });
    }
    const updateOraculum = {
        oraculumName: req.body.oraculumName,
        oraculumDescription: req.body.oraculumDescription,
        oraculumQuotes: req.body.oraculumQuotes,
        createdAt: Date.now(),
        savedBy: req.body.savedBy,
        likes: req.body.likes,
        
    };
    try {
        const updatedOraculum = await OraculumModel.findByIdAndUpdate(
            oraculumId, updateOraculum, { new: true }
        );
        res.status(200).json(updatedOraculum);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
);


export {router as oraculumRouter}





