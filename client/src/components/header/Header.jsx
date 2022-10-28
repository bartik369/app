import React, {useState} from 'react';
import SearchData from '../UI/search/SearchData';
import UserMenu from '../user-menu/UserMenu';
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
 
  return (
    <div className="header">
      <div className={moveHeader === false ? "header__inner" : "slided-content"}>
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
        <div className="user-info">
          <button onClick={userMenuHandler}>Userinfo</button>
          {userMenu &&  <UserMenu logout={logout} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
