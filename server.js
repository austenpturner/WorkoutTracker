const express = require('express');
const path = require("path");
const mongoose = require("mongoose");

// Creating express app
const app = express();

// Setting up port
const PORT = process.env.PORT || 8000;

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout");

const db = require("./models");

// Use "public" folder to serve static assets
app.use(express.static('public'));

// Express middleware - sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Listen on prior defined PORT
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});




