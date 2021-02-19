import React from 'react';

const List = (props) => {
    const imagePath = "http://image.tmdb.org/t/p/w185";
    const posterAlternative = "https://i.pinimg.com/originals/73/97/d8/7397d88e6fe227d2e912b5b80039b88a.png";

    const returnList =  props.movies.map(movie => {
        return (
            <div className="container">
                <div className="row">
                    <div key={movie.id} className="m-2 col s12 m6 l3">
                        <h4>{movie.original_title}</h4>
                        {
                            movie.poster_path == null ? <img src={posterAlternative} alt="No Poster Available for this movie" /> : <img src={imagePath + movie.poster_path} alt={movie.original_title} />
                        }
                    </div>
                </div>
            </div>
        )});

    return (
        <React.Fragment>
            {returnList}
        </React.Fragment>
    )
}

export default List;