import {React, useState} from "react";
import './SearchData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';

const SearchData = ({searchQueryLength, delSearchQuery, ...props}) => {
    const [activeSearch, setActiveSearch] = useState(true);

    const setStatusSearch = () => {
        setActiveSearch(false);
    };
    
    window.addEventListener('click', () => {
        setActiveSearch(true);
        delSearchQuery();
    });

    return (
        <div>
        <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <button className="btn-search" onClick={setStatusSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
            <input {...props} className={`input-search active-search${activeSearch 
                ? "active-search" 
                : "" && delSearchQuery}`}/>
            <FontAwesomeIcon 
            icon={faXmark} 
            className={`delete-searchquery ${searchQueryLength <= 0 ? "" : "active"}`} 
            onClick={delSearchQuery}/>
        </div>
        </div>
    )
}

export default SearchData;