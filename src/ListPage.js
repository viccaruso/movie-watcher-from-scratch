import React, { useEffect, useState } from 'react';
import { getWatchList } from './services/supabase-utils';
import MovieCard from './MovieCard';

export default function ListPage() {
  const [movies, setMovies] = useState([]);

  async function fetchAndRefresh() {
    const watchlist = await getWatchList();
    setMovies(watchlist);
  }

  useEffect(() => {
    fetchAndRefresh();
  }, []);
  return (
    <div className='listpage-container'>
      <h1>Your Watchlist</h1>
      {
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      }
    </div>
  );
}
