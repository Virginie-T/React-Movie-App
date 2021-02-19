import React from 'react';
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap';

const List = (props) => {
    const imagePath = "http://image.tmdb.org/t/p/w185";
    const posterAlternative = "https://i.pinimg.com/originals/73/97/d8/7397d88e6fe227d2e912b5b80039b88a.png";

    const returnList =  props.movies.map(movie => {
        return (
            <div className="m-3">
                <div key={movie.id}>        
                    <Card>
                        {
                            movie.poster_path == null ? <CardImg top width="100%" src={posterAlternative} alt="No Poster Available for this movie" /> : <CardImg top width="100%" src={imagePath + movie.poster_path} alt={movie.original_title} />
                        }
                        <CardBody>
                            <CardTitle tag="h5">{movie.original_title}</CardTitle>
                        </CardBody>
                    </Card>                    
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