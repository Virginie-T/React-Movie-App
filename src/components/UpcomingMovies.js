import React, {Component} from 'react';
import List from './List'

const UpcomingMoviesList = (props) => {

    useEffect(() => {
        props.getUpcomingMovies();
    }, []);
    
    return (
        <div className="container-fluid horizontal">
            <h3>Upcoming Movies</h3>
            <List movies={props.getUpcomingMovies} />
        </div>
    )
}

export default UpcomingMoviesList;