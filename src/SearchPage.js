import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { searchTMDBMovies } from './services/api-utils';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const response = await searchTMDBMovies(query);
    setResults(response);
    console.log(response);
  }

  return (
    <div className='search-page'>
      <form onSubmit={handleSearch}>
        <label> Movie Search:
          <input type='text' value={query} onChange={e => setQuery(e.target.value)}/>
        </label>
        <button type='submit'>Search</button>
      </form>
      <div className='search-results'>
        {
          results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  );
}
