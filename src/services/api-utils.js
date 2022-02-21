export async function searchTMDBMovies(query) {
  const response = await fetch(`/.netlify/functions/movie-search-tmdb?query=${query}&page=1`);
  const json = await response.json();
  return json.data.results;
}

export async function getCastAndCrew(id) {
  const response = await fetch(`/.netlify/functions/movie-credits-tmdb?id=${id}`);
  const json = await response.json();
  return json.data;
}

export async function getMovieDetails(id) {
  const response = await fetch(`/.netlify/functions/movie-details-tmdb?id=${id}`);
  const json = await response.json();
  return json.data;
}