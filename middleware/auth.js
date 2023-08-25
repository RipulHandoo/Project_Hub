// this will acts as an middleware for all the routes that needs authentication
require("dotenv").config();
const jwt = require("jsonwebtoken");

// this function will have 3 paeaameters as it is a middleware it contains the request, response and next
function authentication(req, res, next) {
    console.log("Headers:", req.headers);
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token not found"
        });
    }

    jwt.verify(token, process.env.ACCESS_JWT_TOKEN_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({
                message: "Token not verified"
            });
        }
        else{
            // req.user = user;
            console.log("User:", user)
            next();
        }
    });
}


module.exports = authentication;