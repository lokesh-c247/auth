import {Container, Typography } from "@mui/material";
import TourCard from "../components/Tourcard";
import Grid from '@mui/material/Grid';
import cities from "../utility/data.json";
import {Outlet,} from "react-router-dom";
import React, { useContext } from "react";
import { MyContext } from "../App";


const Home = () => {
  
  const { loggedInUser } = useContext(MyContext);
  console.log(loggedInUser, "from Home")


 
    return (
        <div>
      <Container sx = {{marginY : 5 }}>
        <Typography variant="h5" component="h4" sx = {{color : "black"}}>Hello , {loggedInUser.firstName}</Typography>
      {
        cities.map((city)=>{
          return (
            <>
              <Typography variant="h4" component="h2" key = {city.id} margin={2}>
                {city.name}
              </Typography>
                <Grid container spacing={2}>
                {
                  city.tours.map((tour , index) => 
                  <TourCard
                  tour = {tour} key = {index}/>
                  )
                }
              </Grid>
              <Outlet/>
            </>
          )
        })
      }

      
      </Container>
   
   </div>
    )
}

export default Home;