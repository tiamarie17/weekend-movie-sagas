
import React, { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Details.css';
// Importing Material UI tools
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'
import { autocompleteClasses } from '@mui/material';

function Details(){

    const history=useHistory();


    //getting genres and movie clicked info from the redux store
    const genres = useSelector((store) =>{
        return store.genres;
    })

    const storeMovieClicked= useSelector((store) =>{
        return store.storeMovieClicked;
    })
 

    //back button onClick returns user to homepage
    const goToHomepage = () =>{
        console.log('in goToHomePage');

        history.push('/');
    }

  
    return(
    <>
  
      <Card sx={{ maxWidth: 500, maxHeight: 900}}>
      <CardMedia
        component="img"
        alt={storeMovieClicked.title}
        height="400"
        width="400"
        img src={storeMovieClicked.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {storeMovieClicked.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {storeMovieClicked.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" onClick={goToHomepage}>Back to Movie List</Button>
      </CardActions>
    </Card>
  
    </>
    );

}

export default Details;