let mongoose = require("mongoose");
const db = require("./models");

mongoose.connect("mongodb://localhost/workout", {
    useUrlParser: true,
    useFindAndModify: false
});

let workoutSeed = [
{
        day: new Date(new Date().setDate()(new Date().getDate() - 10)),
        exercises: [ 
        {
            type: "push",
            name: "Bench Press",
            weight: 250,
            reps: 8,
            sets: 5
        }
    ]
},
{
    day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "push",
        name: "Military Press",
        weight: 45,
        reps: 8,
        sets: 5
    }
]
},
{
    day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "push",
        name: "Pushups",
        weight: 45,
        reps: 8,
        sets: 5
    }
]
},
{        day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "Pull Ups",
        weight: 45,
        reps: 8,
        sets: 5
    }
]},
{        day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "lat pulldowns",
        weight: 145,
        reps: 8,
        sets: 5
    }
]
},
{        day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "rows",
        weight: 200,
        reps: 8,
        sets: 5
    }
]
},
{        day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "push",
        name: "squats",
        weight: 250,
        reps: 5,
        sets: 5
    }
]
},
{        day: new Date(new Date().setDate()(new Date().getDate() - 10)),
    exercises: [ 
    {
        type: "pull",
        name: "deadlifts",
        weight: 250,
        reps: 8,
        sets: 5
    }
]
}
];