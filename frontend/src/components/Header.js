import React from "react";
import "./Header.css";
import logo from "../assets/HandsOn-Logo.jpeg";   
import avatar from "../assets/avatar.png"; 

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="app-title">Task Manager</h1>
            </div>
            <div className="header-right">
                <img src={avatar} alt="User Avatar" className="avatar" />
            </div>
        </header>
    );
}

export default Header;
