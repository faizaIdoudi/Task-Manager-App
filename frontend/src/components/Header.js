import React from "react";
import logo from "../assets/HandsOn-Logo.jpeg";
import avatar from "../assets/avatar.png";

function Header() {
  return (
    <header className="relative flex items-center px-6 py-4 bg-white shadow-lg">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full border-2 border-gray-300"
        />
      </div>

      {/* Center: Title */}
    
    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-blue-700 text-2xl font-extrabold tracking-wider uppercase">
     Task Manager
    </h1>
   

      {/* Right: Avatar */}
      <div className="ml-auto relative">
        <img
          src={avatar}
          alt="User Avatar"
          className="h-10 w-10 rounded-full border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-gray-400 transition"
        />
      </div>
    </header>
  );
}

export default Header;
