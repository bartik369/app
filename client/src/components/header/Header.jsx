import React, { useEffect, useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName, searchUrl, getSearchQuery, value, delSearchQuery, searchQueryLength}) => {

  const [conditions, setConditions] = useState(false);

  useEffect(() => {
    if(pageName === 'Поиск' || searchUrl === '/search') {
      setConditions(true)
    }
  }, [pageName, searchUrl]);

  return (
      <div className="header">
        {conditions && 
           <SearchData
           placeholder="Поиск..."
           value={value}
           onChange={(e) => getSearchQuery(e.target.value)}
           delSearchQuery={delSearchQuery}
           searchQueryLength={searchQueryLength}
           />
        } 
      </div>
  )
}

export default Header;
