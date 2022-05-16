import React, { useEffect, useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName, getSearchQuery, value, delSearchQuery, searchQueryLength}) => {

  const [checkPageName, setPageName] = useState(false);

  useEffect(() => {
    if(pageName === 'deviceSearhPage') {
      setPageName(true)
    }
  }, [pageName])

  return (
      <div className="header">
        { checkPageName && 
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
