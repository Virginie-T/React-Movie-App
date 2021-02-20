import React from 'react';
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';

const MainSearch = (props) => {
    return (
        <div className="row">
            <form onSubmit={props.searchMovies}>
                <InputGroup>
                    <Input placeholder="Search..." onChange={props.handleSearchInput} />
                    <InputGroupAddon addonType="append"><Button color="warning" type="submit"><i className="fa fa-arrow-circle-right fa-lg" /></Button></InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    )
}

export default MainSearch;