import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const MenuItem = (props) => {

  return (
    <li onClick={() => {props.getLink(props.to); props.getLinkName(props.name)}} className="menu__item">
      <Link to={props.to}>
        <div className="icon">
          <i class={props.icon}></i>
        </div>
        <a href={props.to} className="menu__link">
          {props.name}
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
