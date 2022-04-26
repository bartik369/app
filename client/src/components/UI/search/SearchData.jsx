import React, {useState} from "react";
import classes from './SearchData.module.css'

const SearchData = (props) => {

    return (
        <div className={classes.searchInput}>
            <input {...props} />
        </div>
    )
}

export default SearchData;