import React from "react";
import  "./usermenu.css"

export default function UserMenu({logout}) {
  return (
    <div className="user-menu">
        <button onClick={logout}>Выйти</button>
    </div>
  )
}
