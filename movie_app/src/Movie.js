import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster, genres, synopsis}) {
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Genres">
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster}) {
    return (
        <img src={poster}/>
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;