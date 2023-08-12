import {Button, Container, Typography } from "@mui/material";
import TourCard from "../components/Tourcard";
import Grid from '@mui/material/Grid';
import cities from "../utility/data.json";
import {Outlet, useNavigate, } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";


const Home = () => {
  const {setAuth} = useContext(MyContext);
 

  const navigate = useNavigate();
    return (
        <div>
      <Container sx = {{marginY : 5 }}>
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