"use client";

import React, { useState } from "react";

const tabStyles = {
  default: "px-6 py-3 cursor-pointer text-lg font-medium",
  active:
    "px-6 py-3 cursor-pointer border-b-2 border-blue-500 text-blue-500 text-lg font-semibold -mb-[2px]",
  inactive:
    "px-6 py-3 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-300 text-lg font-medium",
};

const buttonTabStyles = {
  default:
    "px-6 py-3 cursor-pointer text-lg font-medium bg-gray-100 rounded-md",
  active:
    "px-6 py-3 cursor-pointer text-lg font-semibold bg-blue-500 text-white rounded-md",
  inactive:
    "px-6 py-3 cursor-pointer text-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300 rounded-md",
};

export default function Tabs({ tabs, type = "default" }) {
  const [activeTab, setActiveTab] = useState(0);

  const styles = type === "button" ? buttonTabStyles : tabStyles;

  return (
    <div className="w-full">
      <div
        className={`flex space-x-2 mb-4 ${
          type === "default" && "border-b-2 border-gray-200"
        }`}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={index === activeTab ? styles.active : styles.inactive}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white rounded-lg mb-8">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
}
