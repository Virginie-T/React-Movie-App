import React from 'react';

const MainSearch = (props) => {
    return (
        <div>
            <button onClick={props.fetchMovies}>Get Movies</button>
        </div>
    )
}

export default MainSearch;