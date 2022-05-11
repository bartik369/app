import React, { useState } from 'react';
import './header.css';

const Header = () => {

const[checkHightStatus, setCheckHightStatus] = useState(false);

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    setCheckHightStatus(true);
  } else {
    setCheckHightStatus(false)
  }

});

  return (
      <div className={`header ${checkHightStatus ?  "stick" : ""}`}>
      </div>
  )
}

export default Header;
