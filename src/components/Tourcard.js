import Paper from '@mui/material/Paper';
import { Grid, createTheme , ThemeProvider} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';


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

const TourCard = ({tour}) => (
    
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={5} variant='outlined' >
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
        
        
        </Box>
                
            </Paper>
            </ThemeProvider>
        </Grid>

    
    
    
)

export default TourCard;