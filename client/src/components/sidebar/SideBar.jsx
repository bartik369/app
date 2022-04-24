import React, { useState } from "react";
import MenuItem from './MenuItem';

const Sidebar = (props) => {
  const [inActive, setInactive] = useState(false);
  const menuItem = [
    {name: 'Главная', to: '/', iconClassName: 'bi bi-house-fill'},
    {name: 'Статистика', to: '/statistic', iconClassName: 'bi bi-bar-chart-fill'},
    {name: 'Пользователи', to: '/users', iconClassName: 'bi bi-people-fill'},
    {name: 'Задачи', to: 'Tasks', iconClassName: 'bi bi-file-earmark-check-fill'},
  ]

  let menuBurger = document.querySelector('.burger');

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
            menuBurger.classList.add('open')
          ) : (
            menuBurger.classList.remove('open')
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
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
