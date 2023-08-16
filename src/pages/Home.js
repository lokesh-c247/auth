import { Container, Typography } from "@mui/material";
import TourCard from "../components/Tourcard";
import Grid from '@mui/material/Grid';
import cities from "../utility/data.json";
import React, { useContext, useState } from "react";
import { MyContext } from "../App";


const Home = () => {
  
  const { loggedInUser } = useContext(MyContext);
  const [hotelDetails,setHotelDetails] = useState(cities);
  const [totalPrice,setTotalPrice] = useState(0);
  // console.log(hotelDetails);
    return (
        <div>
      <Container sx = {{marginY : 5 }}>
        <Typography variant="h5" component="h4" sx = {{color : "black"}}>Hello , {loggedInUser?.firstName}</Typography>
        <Typography sx = {{color : "black"}}>Quantity : {totalPrice}</Typography>
      {
        hotelDetails?.map((city,outerIndex)=>{
          return (
            <>  
              <Typography variant="h4" component="h2" key = {city.id} margin={2}>
                {city.name}
              </Typography>
                <Grid container spacing={2}>
                {
                  city?.tours.map((tour , index) => 
                  <TourCard tour = {tour} outerIndex = {outerIndex} index = {index} hotelDetails={hotelDetails} key = {index} setHotelDetails={setHotelDetails} setTotalPrice = {setTotalPrice}/>
                  )
                }
              </Grid>
            </>
          )
        })
      }

      
      </Container>
   
   </div>
    )
}

export default Home;