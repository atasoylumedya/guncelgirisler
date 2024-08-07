"use client";

import React from "react";

const Checkbox = React.forwardRef(
  ({ label, id, name, checked, onChange, className }, ref) => (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="inline-flex items-center">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          ref={ref}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </div>
  )
);

export default Checkbox;
