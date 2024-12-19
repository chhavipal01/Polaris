import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div
      className={`min-h-screen bg-gray-100 shadow-md flex flex-col justify-between p-4 transition-all duration-300 ${
        extended ? "w-64" : "w-20"
      }`}
    >
      {/* Top Section */}
      <div className="space-y-4">
        {/* Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
        />

        {/* New Chat */}
        <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src={assets.plus_icon} alt="New Chat" className="w-6" />
          {extended && <p className="text-gray-600 text-lg">New Chat</p>}
        </div>

        {/* Recent Chats */}
        {extended && (
          <div className="mt-4">
            <p className="text-gray-500 font-semibold mb-2">Recent</p>
            <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
              <img src={assets.message_icon} alt="Chat" className="w-6" />
              <p className="text-gray-600">What is React...</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Help */}
        <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src={assets.question_icon} alt="Help" className="w-6" />
          {extended && <p className="text-gray-600">Help</p>}
        </div>

        {/* Activity */}
        <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src={assets.history_icon} alt="Activity" className="w-6" />
          {extended && <p className="text-gray-600">Activity</p>}
        </div>

        {/* Settings */}
        <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <img src={assets.setting_icon} alt="Settings" className="w-6" />
          {extended && <p className="text-gray-600">Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
