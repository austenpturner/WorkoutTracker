const express = require('express');
const path = require("path");

// Creating express app
const app = express();

// Setting up port
const PORT = process.env.PORT || 8000;

// Use "public" folder to serve static assets
app.use(express.static('public'));

// Express middleware - sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.get('/api/workouts', (req, res) => {
    db.workouts.find();
    console.log('/api/workouts')
    console.log(req.body);
});

app.put('/api/workouts/:id', (req, res) => {
    console.log('/api/workouts/:id')
    console.log(req.body);
});

app.get('/api/workouts/range', (req, res) => {
    console.log('/api/workouts/range')
    console.log(req.body);
});

app.post('/api/workouts/range', (req, res) => {
    console.log('/api/workouts/range')
    console.log(req.body);
});

// // Requiring routes
// require('')(app);

// // Require router
// const routes = require('');
// // Use defined routes
// app.use(routes);

// Listen on prior defined PORT
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});




