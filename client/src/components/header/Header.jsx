import React, { useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName, getSearchQuery}) => {


  return (
      <div className="header">
        {pageName === 'Поиск' &&
          <SearchData
          placeholder="Поиск..."
          onChange={(e) => getSearchQuery(e.target.value)}  
          />
        }

      </div>
  )
}

export default Header;
