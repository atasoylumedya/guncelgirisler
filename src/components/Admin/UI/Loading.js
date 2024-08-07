"use client";

import React from "react";
import Spinner from "./Spinner";

const defaultTextColors = {
  primary: "text-blue-500",
  secondary: "text-gray-500",
  success: "text-green-500",
  error: "text-red-500",
  warning: "text-yellow-500",
  white: "text-white",
  black: "text-black",
};

export default function Loading({
  size = "medium",
  color = "primary",
  borderSize = 4,
  text = "Yükleniyor...",
  textColor,
}) {
  const textClass = textColor ? textColor : defaultTextColors[color];

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <Spinner size={size} color={color} borderSize={borderSize} />
      {text && <p className={textClass}>{text}</p>}
    </div>
  );
}
