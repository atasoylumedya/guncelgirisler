"use client";

import React from "react";

const TextArea = React.forwardRef(
  ({ label, id, name, placeholder, rows = 4, ...rest }, ref) => (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        ref={ref}
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
      ></textarea>
    </div>
  )
);

export default TextArea;
