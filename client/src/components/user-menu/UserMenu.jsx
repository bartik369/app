import React from "react";
import  "./usermenu.css"

export default function UserMenu({logout}) {
  return (
    <div className="user-menu">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
        <button onClick={logout}>Выйти</button>
    </div>
  )
}
