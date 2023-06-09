import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Workouts from "./Workouts";
import AddWorkout from "./AddWorkout";
import Footer from './Footer';
import Box from '@mui/material/Box';


function Dashboard({ setEditWorkout }) {
  const [user, setUser] = useState({});
  
  let { id } = useParams();

  // GET whole user object and save it in "user" state
  useEffect(() => {
    fetch(`https://my-workout-space-backend.herokuapp.com/users/${id}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <NavDashboard user={user} />
      <Box container sx={{ display: "flex" }}>
        
        <Workouts user={user} setEditWorkout={setEditWorkout}/>
        <AddWorkout user={user} />
      </Box>
      <Footer />
    </div>
  );
}

export default Dashboard;
