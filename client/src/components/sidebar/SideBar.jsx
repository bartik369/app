import React, { useState } from "react";
import MenuItem from './MenuItem';
import '../../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ slideContentContainer, setPageName}) => {
  const [inActive, setInactive] = useState(false);

  const menuItem = [
    {name: 'Главная', to: '/', iconClassName: 'bi bi-house'},
    {name: 'Добавить', to: '/add_device', iconClassName: 'bi bi-file-earmark-plus'},
    {name: 'Поиск', to: '/search', iconClassName: 'bi bi-binoculars'},
    {name: 'Статистика', to: '/statistic', iconClassName: 'bi bi-bar-chart'},
    {name: 'Пользователи', to: '/users', iconClassName: 'bi bi-people'},
    {name: 'Задачи', to: '/tasks', iconClassName: 'bi bi-check2-square'},
    {name: 'Календарь', to: '/calendar', iconClassName: 'bi bi-calendar-date'},
    {name: 'Настройки', to: '/settings', iconClassName: 'bi bi-gear'},
  ]


  return (
    <div className={`sidebar inactive${inActive ? "inactive"  : ""}`}>
      <div className="top-section">
        <div className="logo">
        </div>
        <button
          onClick={() => setInactive(!inActive)}
          className="toggle-menu-btn"
        >
          {inActive ? (
            <FontAwesomeIcon icon={faBarsStaggered} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
          {inActive 
          ? slideContentContainer(true) 
          : slideContentContainer(false)
          }
        </button>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          {menuItem.map((item, index) => (
            <MenuItem
            setPageName={setPageName}
            key={index}
            name={item.name}
            icon={item.iconClassName}
            to={item.to}
             />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
