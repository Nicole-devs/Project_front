import React from 'react'
import WorkoutItem from './WorkoutItem'
import Box from '@mui/material/Box';

function Workouts( { user, setEditWorkout } ) {

  const renderWorkouts = user.workouts?.map(workout => {
    return <WorkoutItem key={workout.id}
    workout={workout}
    setEditWorkout={setEditWorkout}
    />
  })
  
  return (
    <Box container 
    sx={{ m: 2, 
      border: 1, 
      height: "700px", 
      width: "100%",
      borderRadius: 1, 
      display: "flex", 
      overflowX: "auto" }}
    >
      {renderWorkouts}
    </Box>
  )
}

export default Workouts;
