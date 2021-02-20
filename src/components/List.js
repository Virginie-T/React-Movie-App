import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MovieDetails from './MovieDetails';

const List = (props) => {
    const imagePath = "http://image.tmdb.org/t/p/w185";
    const posterAlternative = "https://i.pinimg.com/originals/73/97/d8/7397d88e6fe227d2e912b5b80039b88a.png";

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const returnList =  props.movies.map(movie => {
        return (
            <div className="m-3">
                <div key={movie.id}>        
                    <Card>
                        {
                            movie.poster_path == null ? <CardImg onClick={toggle} top width="100%" src={posterAlternative} alt="No Poster Available for this movie" /> : <CardImg onClick={toggle} top width="100%" src={imagePath + movie.poster_path} alt={movie.original_title} />
                        }
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>{movie.original_title}</ModalHeader>
                            <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                        </Modal>

                        <MovieDetails id={movie.id} />

                        <CardBody>
                            <CardTitle tag="h5" className="text-center mb-0">{movie.original_title}</CardTitle>
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