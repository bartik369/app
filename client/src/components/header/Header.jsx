import React, { useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName, getOnChangeValue}) => {


  return (
      <div className="header">
        {pageName === 'Поиск' &&
          <SearchData
          placeholder="Поиск..."
          onChange={(e) => getOnChangeValue(e.target.value)}

          
          />
        }

      </div>
  )
}

export default Header;
