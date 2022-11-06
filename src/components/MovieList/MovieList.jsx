import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //image click handler function
    const handlePosterClick = (event) => {
        let imageId = event.currentTarget.id;
        console.log('in handlePosterClick, imageId is', imageId );

        history.push(`/details/${imageId}}`);

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={handlePosterClick} src={movie.poster} alt={movie.title}/>
                        </div>
        
                        
                    );
                })}
            </section>
            <button>Back to Movie List</button>
        </main>

    );
}

export default MovieList;