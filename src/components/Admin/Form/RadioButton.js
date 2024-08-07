"use client";

import React from "react";

const RadioButton = React.forwardRef(
  ({ name, options, selectedOption, onChange, className }, ref) => (
    <div className={`mb-4 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center mr-4">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
            ref={ref}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  )
);

export default RadioButton;
