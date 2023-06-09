import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import NavEdit from './NavEdit'
import Footer from './Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';

const defaultValues = {
  id: undefined,
  title: "",
  comment: "",
  star_rating: undefined,
};

function WorkoutDetails({ editWorkout }) {
  const [formValues, setFormValues] = useState(defaultValues);
  const [imageUrl, setImageUrl] = useState("")

  const { title, comment, star_rating } = editWorkout
  
  let {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://my-workout-space-backend.herokuapp.com/workouts/${id}`)
      .then((res) => res.json())
      .then((workout) => setFormValues(workout));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues, 
      [name]: value,
      id: parseInt(id)
    });
  };

  const handleStarHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formValues }),
    };
    fetch(`https://my-workout-space-backend.herokuapp.com/workouts/${id}`, configObj)
      .then((res) => res.json())
      .then(updatedWorkout => navigate(`/users/${updatedWorkout.user_id}`))
    
      setFormValues(defaultValues)
  };

  return (
  <>
  <NavEdit />
    <Box container sx={{ display: "flex", alignItems: "center", justify: "space-between" }}>
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
          <Typography style={{ wordWrap: "break-word" }}>
            Comment: {comment}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex" }}>
          <Typography>Your rating: </Typography>
          <Rating name="read-only" value={star_rating} readOnly sx={{ flexGrow: 1 }} />
        </CardContent>
      </Card>
        <form onSubmit={handleSubmit}>
        <Box container sx={{ padding: "15px", 
          m:2, 
          border:1, 
          height: "400px", 
          width:"400px", 
          borderRadius: 2, 
          mt: 5 }}
        >

      <Grid container alignItems="center" justify="center" direction="column" margin="2%"/>
      <Typography sx={{ fontFamily: 'Monospace', lineHeight: 2}} variant="h4" mt={2} component="arial">Edit Workout Details</Typography>
        <Grid item marginBottom="2%">
        <TextField style={{height: '100%' }}
          InputLabelProps={{ shrink: true }}
          InputProps= {{
            startAdornment: (
              <InputAdornment position="start">
              </InputAdornment>
            )
          }}
          id="comment"
            name="comment"
            label="Workout Comment"
            type="comment"
            value={formValues.comment}
            onChange={handleChange}
            />

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography sx={{ fontFamily: 'Monospace' }}>My Workout Rating:</Typography>
          <Rating
            name="star_rating"
            value={formValues.star_rating}
            onChange={handleStarHandle}
          />
        </Box>
        <Button variant="contained" color="secondary" type="submit">
          Edit
        </Button>
        </Grid>
        </Box>
    </form>     
    <Footer />
  </Box>
  </>
)
}

export default WorkoutDetails;
