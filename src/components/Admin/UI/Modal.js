"use client";

import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".modal-content") === null) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "hidden";
        document.addEventListener("mousedown", handleClickOutside);
      }
    } else {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
const sizeClasses = {
  small: "max-w-sm",
  medium: "max-w-md",
  large: "max-w-lg",
  xlarge: "max-w-xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "medium",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 !m-0">
      <div
        className={`relative bg-white rounded-lg shadow-lg w-full mx-4 md:mx-0 ${sizeClasses[size]} modal-content`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">{children}</div>
        {footer && (
          <div className="flex justify-end p-4 border-t">{footer}</div>
        )}
      </div>
    </div>
  );
}
