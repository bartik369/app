import React from "react";
import './SearchData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';

const SearchData = (props) => {

    return (
        <div className="search-box">
            <button className="btn-search">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            <FontAwesomeIcon 
            icon={faXmark} 
            className={`delete-searchquery ${props.searchQueryLength <= 0 ? "" : "active"}`} 
            onClick={props.delSearchQuery}/>
            <input {...props} className="input-search"/>
        </div>
    )
}

export default SearchData;