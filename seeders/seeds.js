let mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb+srv://Antonio-admin:passw0rd@cluster0.ahew4.mongodb.net/workout?retrywrites=true&w=majority" || "mongodb://localhost/workout");

let workoutSeed = [
{
        day: new Date(new Date().setDate(new Date().getDate() - 10)),
        exercises: [ 
        {
            type: "push",
            name: "Bench Press",
            weight: 250,
            reps: 8,
            sets: 5,
            duration: 30

        }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "push",
        name: "Military Press",
        weight: 45,
        reps: 8,
        sets: 5,
        duration: 55

    }
]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "push",
        name: "Pushups",
        weight: 45,
        reps: 8,
        sets: 5,
        duration: 5

    }
]
},
{        day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "Pull Ups",
        weight: 45,
        reps: 8,
        sets: 5,
        duration: 85

    }
]},
{        day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "lat pulldowns",
        weight: 145,
        reps: 8,
        sets: 5,
        duration: 19

    }
]
},
{        day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "rows",
        weight: 200,
        reps: 8,
        sets: 5,
        duration: 3

    }
]
},
{        day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "push",
        name: "squats",
        weight: 250,
        reps: 5,
        sets: 5,
        duration: 24

    }
]
},
{        day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "deadlifts",
        weight: 250,
        reps: 8,
        sets: 5,
        duration: 15

    }
]
}
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });