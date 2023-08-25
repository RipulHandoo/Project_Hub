require("dotenv").config();

const db = require("../utils/DB.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
    // Get the prn and password of the user 
    const prn = req.body.prn;
    const password = req.body.password;

    try {
        const result = await db.query("SELECT password FROM users WHERE PRN = $1", [prn]);
        
        if (result.rows.length === 1) {
            const hashedPasswordFromDB = result.rows[0].password;

            // Compare the entered password with the hashed password from the database
            const passwordMatch = await bcrypt.compare(password, hashedPasswordFromDB);

            if (passwordMatch) {
                // Make user as a payload that will be taken to make a jwt token
                const user = { name: prn };

                const auth_token = jwt.sign(user, process.env.ACCESS_JWT_TOKEN_KEY);
                
                // Set the Authorization header
                res.setHeader("Authorization", "Bearer " + auth_token);
                
                // Send the JSON response
                res.status(200).json({
                    message: "Login successful"
                });
            } 
        } else {
            res.status(200).json({
                status: "fail",
                data: {
                    PRN: prn,
                },
            });
        }
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred during login.",
        });
    }
}

module.exports = login;
