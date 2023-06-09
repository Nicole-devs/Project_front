import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Signup from './SignUp'
import Login from './Login'
import AddWorkout from './AddWorkout'
import Dashboard from "./Dashboard"
import WorkoutDetails from "./WorkoutDetails";

function App() {

  const [editWorkout, setEditWorkout] = useState({})
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id" element={<Dashboard setEditWorkout={setEditWorkout}/>} />
        <Route path="/users/:id" element={<AddWorkout />} />
        <Route path="/workouts/:id" element={<WorkoutDetails editWorkout={editWorkout} />} />
      </Routes>
    </div>
  );
}

export default App;
