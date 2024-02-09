import React from "react";

export default function InputSelect({ label, options, optionSelected = "",optionViewName = "name",...props }) {
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
      <select
        {...props}
        className="p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        defaultValue={optionSelected}
      >
        <option value = "" disabled name="default">
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id} name={option[optionViewName]}>
            {option[optionViewName]}
          </option>
        ))}
      </select>
    </div>
  );
}
