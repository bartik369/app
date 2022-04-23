import React, { useState } from "react";

const Sidebar = (props) => {
  const [inActive, setInactive] = useState(false);

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
          <li className="menu__item">
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
          <li className="menu__item"></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
