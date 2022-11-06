
import React, { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css';

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
        <button onClick={goToHomepage}>Back to Movie List</button>

        <div className="movieDetail">

            <h1>{storeMovieClicked.title}</h1>
            <img src ={storeMovieClicked.poster}/>
            <h1>{storeMovieClicked.description}</h1>


        </div>

    </>
    );
}

export default Details;