import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    //getting movies from redux store
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //image click handler function
    const handlePosterClick = (movie) => {
        console.log('movie is', movie);
        console.log('in handlePosterClick');
        console.log('movieId is', movie.id);


        history.push(`/details/${movie.id}`);

    }

    return (
        <main>
            <h1>MovieList</h1>
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
            <button>Back to Movie List</button>
        </main>

    );
}

export default MovieList;