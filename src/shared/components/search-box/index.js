import React from "react";

const SearchBox = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="py-1 px-2 pr-10 w-full rounded border bg-[#2f3031] border-[#212121] focus:outline-none focus:border-gray-300 text-cyan-50"
      />
    </div>
  );
};

export default SearchBox;
