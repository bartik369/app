import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import SearchData from '../UI/search/SearchData';
import ProfileMenu from '../profile-menu/ProfileMenu';
import './header.css';

const Header = ({
  pageName, 
  getSearchQuery, 
  value, 
  delSearchQuery, 
  searchQueryLength, 
  logout,
  moveHeader
}) => {


  const [userMenu, setUserMenu] = useState(false);

  const userMenuHandler = () => userMenu ? setUserMenu(false) : setUserMenu(true);

  window.addEventListener("click", () => {
    setUserMenu(false);
  });
  
  return (
    <div className="header">
      <div className={!moveHeader ? "header__inner" : "slided-content"}>
        <div className="search">
          {pageName === "deviceSearhPage" && (
            <SearchData
              placeholder="Поиск..."
              value={value}
              onChange={(e) => getSearchQuery(e.target.value)}
              delSearchQuery={delSearchQuery}
              searchQueryLength={searchQueryLength}
            />
          )}
        </div>
        <div className="header-menu">
          <ul>
            <li>menu 1</li>
            <li>menu 2</li>
            <li>menu 3</li>
            <li>menu 4</li>
          </ul>
        </div>
        <div className="user-info" onClick={(e) => e.stopPropagation()}>
          <i className="bi bi-person" onClick={userMenuHandler}></i>
            <div className="drop-usermenu">
            {userMenu && <ProfileMenu logout={logout} />}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
