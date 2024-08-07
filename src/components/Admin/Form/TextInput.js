"use client";

import React from "react";

const TextInput = React.forwardRef(
  (
    { label, id, name, type = "text", placeholder, readOnly = false, ...rest },
    ref
  ) => (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        readOnly={readOnly}
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          readOnly
            ? "bg-gray-200 cursor-not-allowed border-gray-300 focus:border-gray-300"
            : "bg-white"
        }`}
        {...rest}
      />
    </div>
  )
);

export default TextInput;
