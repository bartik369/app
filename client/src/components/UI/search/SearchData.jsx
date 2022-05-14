import React from "react";
import './SearchData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

const SearchData = (props) => {

    return (
        <div className="search-input">
            <input {...props} />
            <FontAwesomeIcon 
            icon={faXmark} 
            className={`delete-searchquery ${props.searchQueryLength <= 0 ? "" : "active"}`} 
            onClick={props.delSearchQuery}/>
        </div>
    )
}

export default SearchData;