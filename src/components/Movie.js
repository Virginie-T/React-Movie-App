import React, { useState }  from 'react';
import { Card, CardImg, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Badge, Button } from 'reactstrap';


const Movie = ({movie}) => {
    const imagePath = "http://image.tmdb.org/t/p/w185";
    const posterAlternative = "https://i.pinimg.com/originals/73/97/d8/7397d88e6fe227d2e912b5b80039b88a.png";

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="m-3">
            <div key={movie.id}>        
                <Card>
                    {
                        movie.poster_path == null ? <CardImg onClick={toggle} top width="100%" src={posterAlternative} alt="No Poster Available for this movie" /> : <CardImg onClick={toggle} top width="100%" src={imagePath + movie.poster_path} alt={movie.original_title} />
                    }
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                                { (movie.vote_average > 7) ?
                                    <Button outline color="success" className="pr-2 mr-2">
                                        <i className="fa fa-thumbs-up pr-2" /> {movie.vote_average}
                                    </Button>
                                    :
                                    <Button outline color="secondary" className="pr-2 mr-2">
                                        <i className="fa fa-thumbs-down pr-2" /> {movie.vote_average}
                                    </Button>
                                }
                                
                                {movie.original_title}
                        </ModalHeader>
                        <ModalBody>
                            {movie.overview}
                        </ModalBody>
                        <ModalFooter>
                            <h6>Release Date <Badge color="info"> {movie.release_date}</Badge></h6>
                        </ModalFooter>
                    </Modal>

                    <CardBody>
                        <CardTitle tag="h5" className="text-center mb-0">{movie.original_title}</CardTitle>
                    </CardBody>
                </Card>                    
            </div>
        </div>
    )
}

export default Movie;