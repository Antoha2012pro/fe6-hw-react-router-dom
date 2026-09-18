import React, { useState } from 'react';
import { searchMovies } from '../../../shared/api/tmdbAPI';

const MovieSearch = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    searchMovies(trimmedValue)
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  };
    
  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Search movies..."
        className="w-50 border border-gray-300 rounded-l px-2 py-0.5 outline-none focus:border-gray-400" 
      />
      <button 
        type="submit" 
        className="bg-gray-500 border border-gray-500 text-white px-3 py-0.5 rounded-r hover:bg-gray-600 active:bg-gray-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default MovieSearch;
