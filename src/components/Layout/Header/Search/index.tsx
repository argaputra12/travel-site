import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <form action="" className='flex justify-center'>
      <input 
        type="text" 
        placeholder="Search" 
        className="border border-gray-50 px-4 py-3 rounded-l-md text-sm text-gray-50 h-12"
      />
      <button
        type="submit"
        className="bg-primary-blue border-primary-blue border px-4 py-3 rounded-r-md text-lg text-white h-12"
      >
        <FaSearch/>
      </button>
    </form>
  )
}

export default Search