// Import the necessary libraries
const express = require("express"); // Express.js framework for building web applications
const app = express(); // Create an instance of the Express application
const multer = require("multer"); // Multer middleware for handling file uploads

// Import your authentication middleware (not provided in the code snippet)
// Make sure to replace "authentication" with the actual authentication middleware
const authentication = require("./authenticationMiddleware");

// Configure Multer to handle file uploads and specify the destination folder
const uploads = multer({ dest: "uploads/" }); // Files will be temporarily stored in the "uploads" directory

// Define a route to handle POST requests for file uploads
app.post("/upload", authentication, uploads.array("files", 2), (req, res) => {
    // The route path is "/upload"
    // The "authentication" middleware ensures that the user is authenticated before proceeding
    // Multer middleware processes the uploaded files and attaches them to the request object

    console.log(req.files); // Log the uploaded files (Multer attaches them to req.files)
    console.log(req.user); // Assuming req.user is set by your authentication middleware

    res.status(201).json({
        messages: "Files uploaded successfully" // Respond with a JSON message indicating success
    });
});

// Start the Express server to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000"); // Print a message when the server starts
});
