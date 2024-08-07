"use client";

import Link from "@/components/Site/CustomLink";
import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const buttonStyles = {
  success: "bg-green-500 hover:bg-green-700 text-white",
  error: "bg-red-500 hover:bg-red-700 text-white",
  info: "bg-blue-500 hover:bg-blue-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-700 text-white",
  default: "bg-gray-500 hover:bg-gray-700 text-white",
};

export default function Dropdown({ type = "default", label, items, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      if (typeof window !== "undefined") {
        document.dispatchEvent(new CustomEvent("closeAllDropdowns"));
      }
    }
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setIsOpen(false);
    }
  };

  const handlePosition = () => {
    if (typeof window !== "undefined") {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (
          rect.bottom > viewportHeight - 400 &&
          viewportHeight - rect.top < rect.bottom - (viewportHeight - 400)
        ) {
          setDropUp(true);
        } else {
          setDropUp(false);
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handlePosition);
      document.addEventListener("closeAllDropdowns", () => setIsOpen(false));
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("resize", handlePosition);
        document.removeEventListener("closeAllDropdowns", () =>
          setIsOpen(false)
        );
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      handlePosition();
    }
  }, [isOpen]);

  return (
    <div
      className="relative inline-block text-left dropdown-container"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className={`font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300 ${buttonStyles[type]} flex items-center justify-between`}
      >
        {label}
        {isOpen ? (
          <FiChevronUp className="ml-2" />
        ) : (
          <FiChevronDown className="ml-2" />
        )}
      </button>
      {isOpen && (
        <div
          className={`absolute ${
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          } w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
        >
          <div className="py-1">
            {items
              ? items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))
              : children}
          </div>
        </div>
      )}
    </div>
  );
}
