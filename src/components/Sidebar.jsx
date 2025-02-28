import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { SiYoutube } from "react-icons/si";

import { sidebarData } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-[260px] min-w-[250px] max-w-[350px] h-screen bg-white shadow-lg border-r border-gray-200 z-50 p-4 transition-transform duration-300 ease-in-out">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-red-700 text-2xl hover:text-red-500 transition"
        onClick={() => dispatch(toggleMenu())}
      >
        <GiCancel />
      </button>

      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-6">
        <SiYoutube className="text-4xl text-red-600" />
        <span className="text-xl font-bold text-gray-900">PrimeTube</span>
      </div>

      {/* Sidebar Links */}
      <ul className="space-y-3 font-semibold text-gray-800">
        {sidebarData.map((data, index) => (
          <li key={index} className="group">
            <Link
              to={data?.to}
              className="flex items-center gap-3 p-2 rounded-lg transition duration-200 hover:bg-gray-200"
            >
              <span className="text-2xl text-gray-700 group-hover:text-red-600">
                {data.icon}
              </span>
              <span className="group-hover:text-gray-900">{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
