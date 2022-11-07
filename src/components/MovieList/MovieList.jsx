import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';


function MovieList() {

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const dispatch = useDispatch();
    const history = useHistory();

    

    //getting movies from redux store
    const movies = useSelector(store => store.movies);


        //image click handler function
    const handlePosterClick = (movie) => {
            console.log('in handlePosterClick');
            console.log('movie is', movie);
            let id = movie.id;
            
            dispatch({
                type: 'STORE_MOVIE_CLICKED',
                payload: movie
            })

            dispatch({
                type: 'FETCH_GENRES',
                payload: movie.id
            })
    
            //Go to details page of movie clicked
            history.push(`/details/${id}`);
    
        }

    return (
        <>
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick= {handlePosterClick.bind(this, movie)} src={movie.poster} alt={movie.title}/>
                            {/* Found .bind method on Stack Overflow: https://stackoverflow.com/questions/43024593/passing-data-up-in-an-onclick-function-in-react */}
                        </div>
        
                        
                    );
                })}
            </section>
        </main>
        </>

    );
}

export default MovieList;