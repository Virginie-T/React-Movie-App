import React from 'react';

const MainSearch = (props) => {
    return (
        <div className="row">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <input placeholder="Search..." onChange={props.handleSearchInput} type="text" />
                </div>
            </form>
        </div>
    )
}

export default MainSearch;