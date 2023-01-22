import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-400
        "
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
