const multer = require('multer');

function upload(req,res){
   const upload =  multer({dest: "uploads/"});
    upload.single('file');
}

module.exports = upload;