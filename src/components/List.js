import React from 'react';

const List = (props) => {
    const returnList =  props.movies.map(movie => {
        return (
                <div key={movie.id} className="m-2">
                    <h4>{movie.original_title}</h4>
                </div>
        )});

    return (
        <React.Fragment>
            {returnList}
        </React.Fragment>
    )
}

export default List;