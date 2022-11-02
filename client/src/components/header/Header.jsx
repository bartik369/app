import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import SearchData from '../UI/search/SearchData';
import ProfileMenu from '../profile-menu/ProfileMenu';
import useravatar from "../../assets/users/profile-avatar.jpg"
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
  const [countMessages, setCountMessages] = useState("0");
  const [countTodos, setCountTodos] = useState(1)
  const {todos} = useSelector(state => state.todos);
  const overdueTodos = [];


  useEffect(() => {
    todos.map((todo) => {
      if (Date.parse(todo.endTime) <= Date.now() && todo.status !== "done") {
        overdueTodos.push(todo)
      };
    });
    setCountTodos(overdueTodos.length)
  }, [todos])

  

  const userMenuHandler = () => userMenu ? setUserMenu(false) : setUserMenu(true);

  window.addEventListener("click", () => {
    setUserMenu(false);
  });
  
  return (
    <div className="header">
      <div className={!moveHeader ? "header__inner" : "header__slided"}>
        <div className="header__search">
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
        <div className="header__menu">
          <ul>
            <li>menu 1</li>
            <li>menu 2</li>
            <li>menu 3</li>
            <li>menu 4</li>
          </ul>
        </div>
        <div className="header__user-panel" onClick={(e) => e.stopPropagation()}>
          <div className="header__user-panel--notification">
            <div className="todos-notification">
            <div className="todos-notification_count">
              {countTodos}
            </div>
            <i className="bi bi-clipboard-check"></i>
            </div>
            <div className="chat-messagess">
              <div className="chat-messagess__count">
               {countMessages}
              </div>
            <i className="bi bi-chat"></i>
            </div>
          </div>
          <img className="user-avatar" src={useravatar} alt="" onClick={userMenuHandler} />
            <div className="drop-menu">
            {userMenu && <ProfileMenu logout={logout} />}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
