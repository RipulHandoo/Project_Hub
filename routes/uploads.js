const express = require("express")
const multer = require("multer")
const authentication = require("../middleware/auth")
const router = express.Router()

// to use the authentication middleware
// this 1st check the token and then proceed to the next function
router.use(authentication)

// uploading single file
// const upload = multer({dest: "uploads/"});
// router.post("/upload", upload.single("file"), (req,res)=>{
//     res.status(201).json({
//         message : "File uploaded successfully"
//     })
// })

// uploading multiple files
// Here in this we can also 
const uploads = multer({dest : "uploads/"});
router.post("/upload", authentication , uploads.array("files",2), (req,res) =>{
    console.log(req.files);
    console.log(req.user)
    res.status(201).json({
        messages:"file uploaded successfully"
    });
})

module.exports = router;