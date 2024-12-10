import React from 'react';
import { AiOutlineSearch, AiOutlineBell, AiOutlineHeart } from 'react-icons/ai'; // Importing icons for search, notifications, and favorites
import { DropdownMenuDemo } from './profile'; // Importing a custom dropdown menu component

export default function Header() {
  return (
    // Header container with a responsive layout
    <div className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      
      {/* Left section: Logo and Search bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full">
        {/* Logo */}
        <h1 className="text-[#3563e9] text-3xl sm:text-4xl font-bold">MORENT</h1>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          {/* Search Icon positioned within the input field */}
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          {/* Search input field */}
          <input
            type="text"
            title="search"
            placeholder="Search..."
            className="border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full pl-10 pr-4"
          />
        </div>
      </div>

      {/* Right section: Icons and dropdown menu */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Favorite Icon */}
        <AiOutlineHeart className="text-gray-500 cursor-pointer" size={28} />
        {/* Notification Icon */}
        <AiOutlineBell className="text-gray-500 cursor-pointer" size={28} />
        {/* Dropdown menu for account settings or profile options */}
        <DropdownMenuDemo />
      </div>
    </div>
  );
}
