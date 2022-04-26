import React, {useState} from "react";
import classes from './SearchData.module.css'

const SearchData = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className={classes.searchInput}>
            <input 
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text" 
            value={searchQuery}
            placeholder="Поиск..." />
            <div className={classes.searchBtn}><i class="bi bi-search"></i></div>
        </div>
    )
}

export default SearchData;