import React, { useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName}) => {


  return (
      <div className="header">
        {pageName === 'Поиск' &&
          <SearchData
          placeholder="Поиск..."
          
          />
        }

      </div>
  )
}

export default Header;
