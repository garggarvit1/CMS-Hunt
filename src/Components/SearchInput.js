import React from 'react';
import { useState } from 'react';
  

const SearchInput = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <div>
        <div className="relative mx-0 max-w-md">
      <div
        className={`relative ${isSearchVisible ? 'hidden' : ''}`}
        onClick={toggleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div
        className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
          isSearchVisible ? '' : 'hidden'
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-80 py-2 px-4 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="cursor-pointer" onClick={toggleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchInput;