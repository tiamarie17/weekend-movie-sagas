
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css';

function Details(){

    const dispatch= useDispatch();

    const genres = useSelector((store) =>{
        return store.genres;
    })


    return(
    <>
    <h1>Details go here!</h1>
    </>);
}

export default Details;