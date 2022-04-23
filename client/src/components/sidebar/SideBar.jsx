import React, { useState } from "react";

const SideBar = (props) => {
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
    </div>
  );
};

export default SideBar;
