import React, { useState } from "react";
import logo from "../assets/medmonk.png";

import {
  FaTachometerAlt,
  FaFolderOpen,
  FaPlus,
  FaClipboardList,
  FaChartBar,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed justify-start top-0 w-full flex px-4 py-3  ">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-200"
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* ===== Overlay (Mobile) ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-screen
          w-[260px] bg-[#F6F6F6] border-r border-gray-300
          flex flex-col p-4 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* ===== Mobile Sidebar Header (Logo + Close) ===== */}
        <div className="flex justify-between items-center lg:hidden mb-6">
          <img src={logo} alt="logo" className="h-7" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* ===== Desktop Logo ===== */}
        <div className="hidden lg:block mb-8">
          <img src={logo} alt="logo" className="h-8" />
        </div>

        {/* User Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="w-full flex justify-between items-center font-bold px-2 py-2"
          >
            Roger Cox
            <span>{userDropdownOpen ? "▲" : "▼"}</span>
          </button>

          {userDropdownOpen && (
            <div className="ml-2 text-gray-700">
              <p className="py-1 cursor-pointer">Profile</p>
              <p className="py-1 cursor-pointer">Logout</p>
            </div>
          )}
        </div>

        {/* Menu */}
        <div className="text-gray-700 flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer">
            <FaTachometerAlt /> <span>Dashboard</span>
          </div>

          <p className="uppercase text-gray-500 text-xs mt-4">Programs</p>
          <div className="flex flex-col gap-2 ml-2">
            <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer">
              <FaFolderOpen /> <span>All Programs</span>
            </div>
            <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer">
              <FaPlus /> <span>Create Program</span>
            </div>
          </div>

          <p className="uppercase text-gray-500 text-xs mt-4">Claims</p>
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer ml-2">
            <FaClipboardList /> <span>All Claims</span>
          </div>

          <p className="uppercase text-gray-500 text-xs mt-4">Analytics</p>
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer ml-2">
            <FaChartBar /> <span>Analytics & Reports</span>
          </div>

          <p className="uppercase text-gray-500 text-xs mt-4">Account</p>
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer ml-2">
            <FaUser /> <span>Settings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
