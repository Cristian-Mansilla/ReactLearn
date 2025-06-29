import { useState } from "react";
import routine from "./data/routines.js";
import { Btn } from "./styles/Btn.js";
import { Box } from "./styles/Box.js";
import { Row, Grid2 } from "./styles/styled.js";
const RutinasDeportivas = () => {
  const [currentWorkout, setWorkout] = useState(0);
  const [currentExercise, setExercise] = useState(0);
  const workout = routine[currentWorkout];
  const nextRoutine = () => {
    if (currentWorkout !== routine.length - 1) setWorkout(currentWorkout + 1);
  };
  const prevRoutine = () => {
    if (currentWorkout !== 0) setWorkout(currentWorkout - 1);
  };
  return (
    <Box>
      <h1>{workout.title}</h1>
      <Grid2>
        <div>
          <h3>Realizando...</h3>
          <img
            src={workout?.routine[currentExercise]?.img}
            alt="Not found"
          ></img>
        </div>
        <Row>
          {workout.routine.map((exercise, key) => (
            <div key={key}>
              <h4>Ejercicio: {exercise.name}</h4>
              <img
                src={exercise.img}
                onClick={() => setExercise(key)}
                alt="Not found"
              ></img>
              <p>Repeticiones: {exercise.reps}</p>
            </div>
          ))}
        </Row>
      </Grid2>
      <Btn onClick={nextRoutine}>Next</Btn>
      <Btn onClick={prevRoutine}>Prev</Btn>
    </Box>
  );
};
export default RutinasDeportivas;
