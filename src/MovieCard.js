import React from 'react';

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className='movie-card'>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <label>Watched?
        <input type='checkbox' />
      </label>
    </div>
  );
}
