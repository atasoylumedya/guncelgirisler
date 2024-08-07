"use client";

import React from "react";

const spinnerSizes = {
  small: "h-4 w-4",
  medium: "h-8 w-8",
  large: "h-12 w-12",
};

const spinnerColors = {
  primary: "border-blue-500",
  secondary: "border-gray-500",
  success: "border-green-500",
  error: "border-red-500",
  warning: "border-yellow-500",
};

export default function Spinner({
  size = "medium",
  color = "primary",
  borderSize = 4,
}) {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`border-[${borderSize}px] border-t-transparent border-solid rounded-full animate-spin ${spinnerSizes[size]} ${spinnerColors[color]}`}
      ></div>
    </div>
  );
}
