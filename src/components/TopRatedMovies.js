import React, {useEffect} from 'react';
import List from './List'
import { apiKey, topRatedURL } from './../apiKey';


const TopRatedMoviesList = (props) => {

    useEffect(() => {
        props.getTopRatedMovies();
    }, []);

    console.log(props.topRatedMoviesList)
    
    return (
        <div className="container-fluid horizontal">
            <h3 className="mt-3">Top Rated Movies</h3>
            <List movies={props.topRatedMoviesList} />
        </div>
    )
}

export default TopRatedMoviesList;