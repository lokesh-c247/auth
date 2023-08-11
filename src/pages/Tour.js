import { Container, Typography } from "@mui/material";
import Imagecollage from "../components/Imagecollage";

const Tour = () => (
        <Container>
           <Typography variant = "h3" component = "h1" marginTop={3}>
                Explore the World in vegas
           </Typography>
           <Imagecollage/>
        </Container>
);

export default Tour;
