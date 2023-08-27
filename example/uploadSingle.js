// Import the necessary libraries
const express = require("express"); // Express.js framework for building web applications
const app = express(); // Create an instance of the Express application
const multer = require("multer"); // Multer middleware for handling file uploads

// Configure Multer to handle file uploads and specify the destination folder
const upload = multer({ dest: "uploads/" }); // Files will be temporarily stored in the "uploads" directory

// Define a route to handle POST requests for file uploads
app.post("/upload", upload.single("file"), (req, res) => {
    // The route path is "/upload", and it expects a single file with the field name "file"
    // Multer middleware processes the uploaded file and attaches it to the request object

    res.status(201).json({
        message: "File uploaded successfully" // Respond with a JSON message indicating success
    });
});

// Start the Express server to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000"); // Print a message when the server starts
});
