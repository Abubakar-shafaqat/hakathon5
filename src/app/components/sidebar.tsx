import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"; // Adjust the path to match your project structure.
import { VscLayoutSidebarLeft } from "react-icons/vsc";




const Sidebar: React.FC = () => {
  // State to control sidebar visibility on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        className="block lg:hidden p-2 mx-auto text-gray-400 rounded-md left-4 z-50"
        onClick={toggleSidebar}
      >
         
         <VscLayoutSidebarLeft size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative z-40 bg-gray-100 p-4 border-r border-gray-300 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* TYPE Section */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3">TYPE</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="sport" />
                <label htmlFor="sport" className="text-sm">
                  Sport
                </label>
              </div>
              <span className="text-gray-500">(2)</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="sedan" />
                <label htmlFor="sedan" className="text-sm">
                  Sedan
                </label>
              </div>
              <span className="text-gray-500">(1)</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="suv" />
                <label htmlFor="suv" className="text-sm">
                  SUV
                </label>
              </div>
              <span className="text-gray-500">(4)</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="hatchback" />
                <label htmlFor="hatchback" className="text-sm">
                  Hatchback
                </label>
              </div>
              <span className="text-gray-500">(1)</span>
            </li>
          </ul>
        </div>

        {/* CAPACITY Section */}
        <div>
          <h3 className="text-md font-semibold mb-3">CAPACITY</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="2-people" />
                <label htmlFor="2-people" className="text-sm">
                  2 People
                </label>
              </div>
              <span className="text-gray-500">(2)</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="4-people" />
                <label htmlFor="4-people" className="text-sm">
                  4 People
                </label>
              </div>
              <span className="text-gray-500">(1)</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="6-people" />
                <label htmlFor="6-people" className="text-sm">
                  6 People
                </label>
              </div>
              <span className="text-gray-500">(5)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
