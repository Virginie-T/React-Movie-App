import React from 'react';
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';

const MainSearch = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <InputGroup>
                    <Input placeholder="Search..." onChange={props.handleSearchInput} />
                    <InputGroupAddon addonType="append"><Button color="warning" type="submit"><i className="fa fa-arrow-circle-right fa-lg" /></Button></InputGroupAddon>
                </InputGroup>
            </form>
        </>
    )
}

export default MainSearch;