
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css';

function Details(){

    const dispatch= useDispatch();
    //getting movie genres from the redux store
    const genres = useSelector((store) =>{
        return store.genres;
    })
    //getting movielist from the redux store
    const movies = useSelector((store) =>{
        return store.movies;
    })

    

    return(
    <>
    <h1>Details go here!</h1>
    </>);
}

export default Details;