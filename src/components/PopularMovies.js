import React, {Component} from 'react';
import List from './List'


const tPopularMoviesList = (props) => {

    useEffect(() => {
        props.getPopularMovies();
    }, []);
    
    return (
        <div className="container-fluid horizontal">
            <h3>Popular Movies</h3>
            <List movies={props.popularMoviesList} />
        </div>
    )
}

export default PopularMoviesList;