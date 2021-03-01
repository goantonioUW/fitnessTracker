const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
 {
     day: {
        type: Date,
        default: () => new Date()
    },
 },
 {
exercise: [
    {
        type:{
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
    name: {
        type: String,
        trim: true,
        required: "Enter an exercise type"

    },
    weight: {
        type: number
    },
    sets: {
        type: number
    },
    reps: {
        type: number
    }
},
]
 },
    {
        toJSON: {virtuals: true}
    });
    
    workoutSchema.virtual("totalDuration").get(function(){
    
        return this.exercise.reduce( (acc, exercise) => {
    
            return acc + exercise.duration;
    
        }, 0 );
 });

 
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;