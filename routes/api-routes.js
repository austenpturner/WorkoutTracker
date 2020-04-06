const Cardio = require("../lib/Cardio");
const Resistance = require("../lib/Resistance");
const db = require('../models');

module.exports = app => {
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
        });
    });
    
    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
};