"use client";

import React from "react";

const Select = React.forwardRef(
  ({ label, id, name, options, value, onChange, className }, ref) => (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value={""}>--SEÇİNİZ--</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
);

export default Select;
