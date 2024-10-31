import React, { useState } from 'react';
import '../css/App.css'; 
import pic from './pic.png';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(true);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
            <div className="logo">
                <img src={pic} width={140} alt="logo" />
            </div>
            <nav className="menu">
                <h1 className="menu-header">Menu</h1>
                <div className="menu-item nav-active" data-tooltip="Home">
                    <i className="bx bx-home-smile"></i>
                    <span>Annual Dashboard</span>
                </div>
                <div className="menu-item" data-tooltip="Stats">
                    <i className="bx bx-bar-chart-alt-2"></i>
                    <span>Monthly Dashboard</span>
                </div>
                <div className="menu-item" data-tooltip="Chat">
                    <i className="bx bx-message-square-dots"></i>
                    <span>Accounts</span>
                </div>
                <div className="menu-item" data-tooltip="Bookmarks">
                    <i className="bx bx-bookmarks"></i>
                    <span>Income</span>
                </div>
                <div className="menu-item" data-tooltip="Notification">
                    <i className="bx bx-bell"></i>
                    <span>Expenses</span>
                </div>
                <div className="menu-item" data-tooltip="Setting">
                    <i className="bx bx-cog"></i>
                    <span>Balances</span>
                </div>
                <div className="menu-item" data-tooltip="Add">
                    <i className="bx bx-add-to-queue"></i>
                    <span>Setting</span>
                </div>
            </nav>
            <div className="logout" data-tooltip="Logout">
                <i className="bx bx-log-out"></i>
                <span>Logout</span>
            </div>
            <div className="toggle-menu" id="toggle-button" onClick={toggleSidebar}>
                <i className={`bx ${isActive ? 'bxs-left-arrow' : 'bxs-right-arrow'}`}></i>
            </div>
        </aside>
    );
};

export default Sidebar;