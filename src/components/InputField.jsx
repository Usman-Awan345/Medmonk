import React from "react";

const InputField = ({
  label,          
  type = "text",  
  placeholder = "",
  name,
  value,
  onChange,
  onBlur,
  error,          
  className = "", 
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-[#F6F6F6] ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
