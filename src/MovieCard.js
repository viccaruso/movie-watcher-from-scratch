import React from 'react';
import blank from './blank.png';
export default function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <h1>{movie.title}</h1>
      {
        movie.poster_path
          ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
          : <img src={blank} />
      }
      {movie.director && <p>Directed by: {movie.director}</p>}
      {movie.runtime && <p>Runtime: {movie.runtime} minutes</p>}
      <p></p>
    </div>
  );
}
