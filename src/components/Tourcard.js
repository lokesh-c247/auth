import Paper from '@mui/material/Paper';
import { Grid, createTheme , ThemeProvider, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { useState } from 'react';



const theme = createTheme({
    components : {
        MuiTypography : {
            variants : [
                {
                props : {
                    variant : "body2"
                },
                style : {
                    fontSize : 11,
                    // backgroundColor : "blue"
                },
            },
            {
                props : {
                    variant : "body3"
                },
                style : {
                    fontSize : 9,
                },
            }
        ]
        }
    }
})

const TourCard = ({tour , index , outerIndex,hotelDetails,setHotelDetails,setTotalPrice }) => {

    const [added , setAdded] = useState(false);

    const addItems = (index) => {
        console.log(index);
        setAdded(true);
        const temp=[...hotelDetails]
        temp[outerIndex].tours[index].quantity+=1
        setHotelDetails(temp)


    const parent = [].concat(...temp.map((hotel) => hotel.tours));
    const child = parent.map((hotel) => ({
        ...hotel,
        totalCost : hotel.quantity * hotel.price
    }))
    setTotalPrice((prev) => prev + child[index].totalCost);  
    }

    // const totalPrice = parent.reduce((total, tour) => total + tour.quantity * tour.price, 0);
    // setTotalPrice(totalPrice);
    // console.log(hotelDetails , "hd");

    

    return (  
        
                    <Grid item xs={3}>
                       
                    <ThemeProvider theme={theme}>
                    
                    <Paper elevation={0} variant='outlined' >
                        <img className='img' src={tour.image} alt="" srcSet="" />
                        <Box paddingX={2}>
                            <Typography variant='subtitle1' component="h2">{tour.name}</Typography>
                        <Box sx = {{display : "flex" , alignItems : "center"}}>
                        <AccessTime sx = {{width : 15}}/>
                            <Typography variant='body2' component= "p" marginLeft={1}>
                                {tour.duration}
                            </Typography>
                        </Box>
        
                        <Box sx = {{display : "flex" , alignItems : "center"}}>
                             <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size="small"  />  
                            <Typography variant='body2' component= "p" marginLeft={0.5}>{tour.rating}</Typography>
                            <Typography variant='body2' component= "h3" marginLeft={0.5}>({tour.numberOfReviews})</Typography>
                        </Box>
        
                        <Box>
                            <Typography variant='h5' component= "p">${tour.price}</Typography>
                        </Box>
                        {
                            added ? 
                        <Button variant="contained" size="small" > Added !!</Button>
                            :                            
                        <Button variant="outlined" size="small" onClick={()=>addItems(index)}>Add to Cart</Button>
                        }
                
                
                </Box>
                        
                    </Paper>
                    </ThemeProvider>
                </Grid>  
        
       
       
    
    )}

export default TourCard;