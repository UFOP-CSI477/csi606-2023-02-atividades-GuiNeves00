import React from "react";

export default function InputDate({ label, placeholder, ...props }) {
  return (
      <div className="w-1/2">
        {label && (
          <label
            htmlFor={props.id || props.name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          {...props}
          type="date"
          placeholder={placeholder}
          className="p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
  );
}
