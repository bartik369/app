import {React, useState} from "react";
import './SearchData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';

const SearchData = (props) => {
    const [activeSearch, setActiveSearch] = useState(true);

    const setStatusSearch = () => {
        setActiveSearch(false);
    };
    
    window.addEventListener('click', () => {
        setActiveSearch(true);
        props.delSearchQuery();
    });

    return (
        <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <button className="btn-search" onClick={setStatusSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            <input {...props} className={`input-search active-search${activeSearch 
                ? "active-search" 
                : "" && props.delSearchQuery}`}/>
            <FontAwesomeIcon 
            icon={faXmark} 
            className={`delete-searchquery ${props.searchQueryLength <= 0 ? "" : "active"}`} 
            onClick={props.delSearchQuery}/>
        </div>
    )
}

export default SearchData;