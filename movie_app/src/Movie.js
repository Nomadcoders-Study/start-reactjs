import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render(){
        return (
            <img src="https://s3.orbi.kr/data/file/united/251cc0d1434cc0aed00afe93082bb25a.jpeg" width="150px"/>
        )
    }
}

export default Movie;