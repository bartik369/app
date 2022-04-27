import React from "react";
import './SearchData.css'

const SearchData = (props) => {

    return (
        <div className="search-input">
            <input {...props} />
        </div>
    )
}

export default SearchData;