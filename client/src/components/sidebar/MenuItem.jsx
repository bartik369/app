import React from "react";

const MenuItem = (props) => {
    return (
        <li className="menu__item">
            <div className="icon">
              <i class={props.icon}></i>
            </div>
            <a href={props.to} className="menu__link">
              {props.name}
            </a>
          </li>
    )
}

export default MenuItem;