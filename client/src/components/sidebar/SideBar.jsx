import React, { useState } from "react";
import MenuItem from './MenuItem';

const Sidebar = (props) => {
  const [inActive, setInactive] = useState(false);
  const menuItem = [
    {name: 'Главная', to: '/', iconClassName: 'bi bi-house-door'},
    {name: 'Статистика', to: '/statistic', iconClassName: 'bi bi-bar-chart'},
    {name: 'Пользователи', to: '/users', iconClassName: 'bi bi-people'},
    {name: 'Задачи', to: 'Tasks', iconClassName: 'bi bi-check2-square'},
  ]

  return (
    <div className={`sidebar inactive${inActive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <i class="bi bi-laptop"></i>
        </div>
        <button
          onClick={() => setInactive(!inActive)}
          className="toggle-menu-btn"
        >
          {inActive ? (
            <i class="bi bi-arrow-left-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-right-square-fill"></i>
          )}
        </button>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          {menuItem.map((item, index) => (
            <MenuItem
            key={index}
            name={item.name}
            icon={item.iconClassName}
            to={item.to}
             />
          ))}
          {/* <li className="menu__item">
            <div className="icon">
              <i class="bi bi-house-door"></i>
            </div>
            <a href="" className="menu__link">
              Главная
            </a>
          </li>
          <li className="menu__item">
            <div className="icon">
              <i class="bi bi-bar-chart"></i>
            </div>
            <a href="" className="menu__link">
              Статистика
            </a>
          </li>
          <li className="menu__item">
            <div className="icon">
              <i class="bi bi-people"></i>
            </div>
            <a href="" className="menu__link">
              Пользователи
            </a>
          </li>
          <li className="menu__item">
            <div className="icon">
              <i class="bi bi-check2-square"></i>
            </div>
            <a href="" className="menu__link">
              Задачи
            </a>
          </li>
          <li className="menu__item"></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
