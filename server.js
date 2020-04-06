const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const Cardio = require("./lib/Cardio");
const Resistance = require("./lib/Resistance");

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
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

app.post('/api/workouts', (req, res) => {
    const date = new Date().setDate(new Date().getDate());
    const workout = {
        day: date,
        exercises: []
    }
    db.Workout.create(workout, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

app.put('/api/workouts/:id', (req, res) => {
    let exercise;
    if (req.body.type === 'cardio') {
        const { type, name, duration, distance } = req.body;
        exercise = new Cardio(type, name, duration, distance);
    } else {
        const { type, name, duration, weight, reps, sets } = req.body;
        exercise = new Resistance(type, name, duration, weight, reps, sets);
    }
    db.Workout.find({ _id: req.params.id}, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data[0].exercises);
    }).then(data => {
        const currentExercises = data[0].exercises;
        currentExercises.push(exercise);
        db.Workout.updateOne(
        { _id: req.params.id }, 
        { $set: { exercises: currentExercises } }, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
        });
    })
    
});

app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// Listen on prior defined PORT
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});




