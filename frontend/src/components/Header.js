import React from "react";
import logo from "../assets/HandsOn-Logo.jpeg";
import avatar from "../assets/avatar.png";

function Header() {
  return (
    <header className="relative flex items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full" />
      </div>

      {/* Title */}
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">
        Task Manager
      </h1>

      {/*  Avatar */}
      <div className="ml-auto">
        <img src={avatar} alt="User Avatar" className="h-10 w-10 rounded-full border-2 border-gray-300" />
      </div>
    </header>
  );
}

export default Header;
