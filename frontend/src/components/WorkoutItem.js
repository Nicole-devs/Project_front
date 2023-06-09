import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';

function WorkoutItem( { workout, setEditWorkout } ) {
  const [imageUrl, setImageUrl] = useState("")
  const { title, created_at, star_rating, id } = workout

  const [reloadPage, setReloadPage] = useState(false)

  const created_at_readable = created_at.slice(0, 10)

  const navigate = useNavigate()

  function handleClick() {
    setEditWorkout(workout)
    navigate(`/workouts/${id}`)
  }

  function handleDeleteClick(e){
    e.stopPropagation()
    fetch(`https://github.com/Nicole-devs/phase-3-sinatra-react-project/${id}`, {method: "DELETE"})
    setReloadPage((currentState) => !currentState)
    window.location.reload(reloadPage)
  }

  return (
    <Card item
    sx={{ m: 2,
      width: "300px",
      height: "92%",
      flexShrink: 0,
      "&:hover": {
        boxShadow: 20,
        transition: "1s"
      },
    }}
    >
      <CardHeader
      avatar={
        <FitnessCenterIcon />
      }
      title={title}
      >
      </CardHeader>
      <CardContent>
        <Typography>
          Logged on {created_at_readable}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex" }}>
        <Typography>Your rating: </Typography>
        <Rating name="read-only" value={star_rating} readOnly sx={{ flexGrow: 1 }} />
        <DeleteIcon
        onClick={handleDeleteClick}
        sx={{ "&:hover": {
          cursor: "pointer",
        }}} />
      </CardContent>
    </Card>
  )
}

export default WorkoutItem;
