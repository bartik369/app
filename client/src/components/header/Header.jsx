import React, { useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName}) => {

// const[checkHightStatus, setCheckHightStatus] = useState(false);

// window.addEventListener('scroll', () => {
//   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//     setCheckHightStatus(true);
//   } else {
//     setCheckHightStatus(false)
//   }

// });

  return (
      <div className="header">
        {pageName === 'Поиск' &&
          <SearchData />
        }

      </div>
  )
}

export default Header;
