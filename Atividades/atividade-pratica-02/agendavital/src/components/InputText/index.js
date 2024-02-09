import React from "react";

export default function InputText({
  label,
  placeholder = "",
  type = "text",
  value = "",
  ...props
}) {
  return (
    <div className="w-1/2">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm text-gray-700 text-lg"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        value={value}
      />
    </div>
  );
}
