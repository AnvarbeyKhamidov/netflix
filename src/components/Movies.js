import React from 'react';
import Movie from "./Movie";

function Movies(props) {
    console.log(props);
    const {movies = []} = props;
    return (
        <>
            <div className="movies">
                {movies.length ? props.movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                )) : <h1>Nothing has found</h1>}

            </div>
        </>
    );
}

export default Movies;