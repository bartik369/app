import React from "react";

const SideBar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__top-section">
                <div className="logo">
                    <i class="bi bi-laptop"></i>
                    <div className="logo-text">Warehouse 1.0</div>
                </div>
                <div className="toggle-menu-btn">
                    <i class="bi bi-arrow-left-square-fill"></i>
                    </div>
            </div>
        </div>
    )
}

export default SideBar;