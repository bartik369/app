import React from "react";
import classes from './SearchData.module.css'

const SearchData = () => {
    return (
        <div className={classes.searchInput}>
            <input type="text" placeholder="Поиск..." />
            <div className={classes.searchBtn}></div>
        </div>
    )
}

export default SearchData;