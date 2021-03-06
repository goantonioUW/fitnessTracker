async function initWorkout() {
    let lastWorkout = await API.getLastWorkout();
    // console.log("Last workout:", lastWorkout);
    if (lastWorkout) {
      document
      // need to fix line 37 in the index.html
        .querySelector("a[href='/exercise?']")
        .setAttribute("href", `/exercise?id=${lastWorkout._id}`);
  
      const workoutSummary = {
        date: formatDate(lastWorkout.day),
        totalDuration: lastWorkout.totalDuration,
        numExercises: lastWorkout.exercises.length,
        ...exerciseCount(lastWorkout.exercises)
      };

      renderWorkoutSummary(workoutSummary);
    } else {
      renderNoWorkoutText()
    }
  }
  
  function exerciseCount(exercises) {
    const totalCount = exercises.reduce((acc, curr) => {
      if (curr.type === "weights") {
        acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
        acc.totalSets = (acc.totalSets || 0) + curr.sets;
        acc.totalReps = (acc.totalReps || 0) + curr.reps;
      } else if (curr.type === "cardio") {
        acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
      }
      console.log(acc);
      return acc;
    }, {});
    return totalCount;
  }
  
  function formatDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
  
    return new Date(date).toLocaleDateString(options);
  }
  
  function renderWorkoutSummary(summary) {
    const container = document.querySelector(".workout-stats");
  
    const workoutKeyMap = {
      date: "Date",
      totalDuration: "Total Workout Duration",
      numExercises: "Total Exercises",
      totalWeight: "Total Weight Lifted",
      totalSets: "Total Sets",
      totalReps: "Total Reps",
      totalDistance: "Total Miles"
    };
  
    Object.keys(summary).forEach(key => {
      const p = document.createElement("p");
      const strong = document.createElement("strong");
  
      strong.textContent = workoutKeyMap[key];
      const textNode = document.createTextNode(`: ${summary[key]}`);
  
      p.appendChild(strong);
      p.appendChild(textNode);
  
      container.appendChild(p);
    });
  }
  
  function renderNoWorkoutText() {
    const container = document.querySelector(".workout-stats");
    const p = document.createElement("h4");
    const strong = document.createElement("strong");
    strong.textContent = "Create A Workout To Get STARTED!!!"
  
    p.appendChild(strong);
    container.appendChild(p);
  }
  
  initWorkout();
  