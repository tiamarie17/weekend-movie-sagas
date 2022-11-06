
import React, { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css';

function Details(){

    const history=useHistory();

    const dispatch= useDispatch();


    //getting genres and movie clicked info from the redux store
    const genres = useSelector((store) =>{
        return store.genres;
    })

    const movieClicked=useSelector((store) =>{
        return store.movieClicked;
    })
 

    //back button onClick returns user to homepage
    const goToHomepage = () =>{
        console.log('in goToHomePage');

        history.push('/');
    }


    return(
    <>
    <h1>Details go here!</h1>
    <button onClick={goToHomepage}>Back to Movie List</button>
    </>);
}

export default Details;