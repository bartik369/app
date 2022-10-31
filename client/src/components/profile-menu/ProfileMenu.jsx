import React from "react";
import {Link} from "react-router-dom";
import "./profilemenu.css";

export default function ProfileMenu({ logout }) {
  return (
    <div className="profile">
       {/* <div className="profile-circle"></div> */}
      <div className="profile__user">
        <div className="username">Fergus Roderic</div>
        <div className="description">web designer</div>
      </div>
      <ul className="profile-menu">
        <li className="profile__item">
        <i className="bi bi-person-check"></i>
          <Link className="profile__link" to="">Мой профиль</Link>
        </li>
        <li className="profile__item">
        <i className="bi bi-chat-square"></i>
          <Link className="profile__link" to="">Сообщения</Link>
        </li>
        <li className="profile__item">
        <i className="bi bi-pencil"></i>
          <Link className="profile__link" to="">Настройки</Link>
        </li>
        <li className="profile__item">
        <i className="bi bi-box-arrow-right"></i>
          <Link className="profile__link" to="#" onClick={logout}>Выйти</Link>
        </li>
      </ul>
    </div>
  );
}
