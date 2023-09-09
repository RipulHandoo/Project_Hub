const express = require("express")
const multer = require("multer")
const authentication = require("../middleware/auth")
const router = express.Router()
const uuid = require("uuid")
const PutObject = require("../s3Service/putObject")
const listObject = require("../s3Service/listObject")
const createRepo = require("../s3Service/createRepo")


const storage = multer.memoryStorage()
const uploads = multer({storage: storage, limits: {fileSize: 2000000}})

router.post("/uploads", authentication, uploads.array("files", 2), async (req, res) => {
  const files = req.files; // Use req.files directly, it's an array

  try {
    const result = await PutObject(files, req, res);
    
    res.status(201).json({
      message: "Files uploaded successfully",
    });
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

// this is the end point when the user goes to its repository
router.get("/listObject",authentication, async(req,res) => {
  try{
    const response = await listObject(req,res);
    // from here we will send the response to the front end
    res.status(200).json({
      message: "Files listed successfully",
      response: response
    });
  }
  catch(error){
    console.error("Error listing files:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
})

// this is a end point to create a repo for the user
router.get("/createRepo",authentication, async(req,res) => {
  try{
    const response = await createRepo(req,res);
    res.status(200).json({
      message: "Repository created successfully",
      response: response
    });
  }
  catch(error){
    console.error("Error creating repository:", error);
  }
});

module.exports = router;