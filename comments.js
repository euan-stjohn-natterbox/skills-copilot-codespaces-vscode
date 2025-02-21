// Create web server
// 1. Create a web server
// 2. Create a new route for GET /comments
// 3. Read the comments from the file
// 4. Send the comments back as JSON
// 5. Listen on port 4001

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/comments", (req, res) => {});
