import React, {useEffect} from 'react';
import List from './List'


const TopRatedMoviesList = (props) => {

    useEffect(() => {
        props.getTopRatedMovies();
    }, []);
    
    return (
        <div className="container-fluid horizontal">
            <h3 className="mt-3">Top Rated Movies</h3>
            <List movies={props.topRatedMoviesList} />
        </div>
    )
}

export default TopRatedMoviesList;