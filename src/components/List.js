import React from 'react';

const List = (props) => {
    const returnList =  props.movies.map(movie => {
        return (
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
        )});
        
    return (
        <React.Fragment>
            {returnList}
        </React.Fragment>
    )
}

export default List;