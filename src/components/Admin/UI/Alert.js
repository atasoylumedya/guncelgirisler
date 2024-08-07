"use client";

import { useState, useEffect } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiAlertTriangle,
  FiX,
} from "react-icons/fi";
import { useAlert } from "@/context/AlertContext";

const alertStyles = {
  success: "bg-green-100 text-green-700 border-green-400",
  error: "bg-red-100 text-red-700 border-red-400",
  info: "bg-blue-100 text-blue-700 border-blue-400",
  warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
};

const alertIcons = {
  success: <FiCheckCircle />,
  error: <FiAlertCircle />,
  info: <FiInfo />,
  warning: <FiAlertTriangle />,
};

export default function Alert() {
  const { alert } = useAlert();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (alert) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  if (!alert || !isVisible) return null;

  return (
    <div
      className={`border-l-4 p-4 ${
        alertStyles[alert.type]
      } rounded-md flex items-center justify-between space-x-2 my-4 fixed top-4 right-4 z-50`}
    >
      <div className="flex items-center space-x-2">
        <div className="text-2xl">{alertIcons[alert.type]}</div>
        <div className="text-lg">{alert.message}</div>
      </div>
      <button onClick={() => setIsVisible(false)} className="text-xl">
        <FiX />
      </button>
    </div>
  );
}
