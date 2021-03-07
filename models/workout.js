const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day:{
    type: Date,
    default: new Date().setDate( new Date().getDate())
  },

  exercises: [
    {
      type: {
          type: String,
          trim: true,
          required: "Select a workout type."
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter a workout name."
      },
      
      duration:{
          type: Number,
          required: "Please enter workout duration"
        },
      
      weight: {
        type: Number
      },
      
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
  }],
  
  
}, opts );

workoutSchema.virtual("totalDuration").get(function(){
  let totalDuration = 0
  this.exercises.forEach(exercise =>{
    totalDuration += exercise.duration
  });
  return totalDuration
})

const Workout = mongoose.model("Workout", workoutSchema);


module.exports = Workout;