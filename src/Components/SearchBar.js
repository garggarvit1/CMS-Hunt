import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  


  return (
    <div className='flex justify-center py-10'>
      <div class="pt-2 relative mx-auto text-gray-600 justify-center ">
      <p className='text-white '>Hello, What Do You Want To Learn?</p>
        <input
          className="border-0 border-white-300 bg-white h-10 px-5 pr-16 rounded-l-lg text-sm t focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="h-10 bg-transparent hover:bg-blue-500 text-green-700 font-semibold hover:text-white py-0 px-4 border-1 border-green-500  rounded-r-lg">
          
          <Link
            to={`/main?page=${encodeURIComponent(searchValue)}&subpage=${encodeURIComponent(searchValue).toUpperCase()} Home`}
            className="h-15 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-0 px-4 hover:border-transparent  "
          >              
                Search
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;