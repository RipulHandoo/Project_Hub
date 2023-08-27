// Import the necessary libraries
const express = require("express"); // Express.js framework for building web applications
const app = express(); // Create an instance of the Express application
const multer = require("multer"); // Multer middleware for handling file uploads
const uuid = require("uuid"); // Library for generating UUIDs

// Import your authentication middleware (not provided in the code snippet) (check other folder of this repo)
// Make sure to replace "authentication" with the actual authentication middleware
const authentication = require("./authenticationMiddleware");

// Configure Multer to handle file uploads and specify the disk storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Define the destination directory for uploaded files
    },
    filename: (req, filename, cb) => {
        cb(null, uuid.v4() + "-" + filename.originalname); // Generate a unique filename for the uploaded file
    }
});

// Create the uploads middleware using the configured storage and limits
const uploads = multer({ storage: storage, limits: { fileSize: 2000000 } });

// Define a route to handle POST requests for file uploads
app.post("/uploads", authentication, uploads.array("files", 2), (req, res) => {
    // The route path is "/uploads"
    // The "authentication" middleware ensures that the user is authenticated before proceeding
    // The "uploads" middleware processes the uploaded files and attaches them to the request object

    console.log(req.files); // Log the uploaded files (Multer attaches them to req.files)

    res.status(201).json({
        message: "Files uploaded successfully" // Respond with a JSON message indicating success
    });
});

// Start the Express server to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000"); // Print a message when the server starts
});
