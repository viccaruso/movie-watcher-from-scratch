import React from 'react';
import { useLocation } from 'react-router-dom';
import blank from './blank.png';
import { getCastAndCrew, getMovieDetails } from './services/api-utils';
import { addMovieToWatchList, toggleWatched } from './services/supabase-utils';


export default function MovieCard({ movie, fetchAndRefresh }) {

  async function addToWatchList() {
    const castAndCrew = await getCastAndCrew(movie.id);
    const details = await getMovieDetails(movie.id);

    const director = castAndCrew.crew.filter(person => person.job === 'Director')[0].name; // To-do: handle multiple directors
    const genres = [];
    details.genres.map(genre => genres.push(genre.name));

    const movieToAdd = {
      title: movie.title,
      watched: false,
      director: director,
      tmdb_id: movie.id,
      genre: genres,
      runtime: details.runtime,
      imdb_id: details.imdb_id,
      poster_path: details.poster_path,
      description: details.overview
    };
    await addMovieToWatchList(movieToAdd);
  }

  async function setIsWatched() {
    await toggleWatched(movie.id, movie.watched);
    fetchAndRefresh();
  }

  return (
    <div 
      className='movie-card' 
      onClick={useLocation().pathname === '/search' ? addToWatchList : setIsWatched}
    >
      <h1>{movie.title}</h1>
      {
        movie.poster_path
          ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
          : <img src={blank} />
      }
      {movie.director && <p>Directed by: {movie.director}</p>}
      {movie.runtime && <p>Runtime: {movie.runtime} minutes</p>}
      {movie.watched && <p>Watched!</p>}
      <p>{movie.description}</p>
    </div>
  );
}
