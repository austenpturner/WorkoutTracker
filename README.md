# Workout Tracker
An app that helps you view, create and track daily workouts

## The Assignment
This project was a homework assignment for UW Full Stack Bootcamp. The instructions were to create a workout tracking app using MongoDB, Mongoose and an Express server. Users should be able to either add an exercise to an existing workout or create and add exercises to a new workout. The landing page should display the stats of the user's last workout. 

## The Process
For this project we were given starter code that already created the front-end of the app for us. Our job was to create the server and database. I started by installing Express and making a server file with Express boilerplate code and middleware. After I had a server connection, I started setting up the MongoDB connection. I made a workout schema to validate data as a number and exercises as an array. I then created a Mongoose model from the schema. Next I created two JavaScript classes for the two types of workouts possible, cardio and resistance. 

After I had my database connection and Mongoose ORM set up I started working on the server routes. I made three HTML routes to serve up the HTML pages index (landing page), exercise and stats. The API routes were a bit trickier. I made a POST route for /api/exercise so when the user selects "new workout" a new document would be created for the new workout. Then I made a PUT route for /api/exercise/:id using the id parameter to select the current workout the user is adding exercises to. Then after the user enters the exercise information the PUT route adds the exercise to that workout's exercises array. Last I added an API route that will get data from all documents and send the data to the stats page to render graphs and charts of the user's workouts. 

## The Outcome
I was successfully able to build an app that allows the user to track their workouts. Users are able to see their last workout and either add more exercises to their last workout, or create a new workout to add exercises to. Users can navigate to the stats page to see their workout data in the form of a line, bar and pie graph.

## Thanks for reading! :smile:
Please contact me with any questions for comments: austenpturner@msn.com
