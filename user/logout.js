const db = require("../utils/DB.js");

// to make the user log out just simply remove the token from the header

function logout(req,res){
    res.setHeader("Authorization", "")
    res.status(200).json({
        message : req.user + " logged out successfully"
    })
}

module.exports = logout;