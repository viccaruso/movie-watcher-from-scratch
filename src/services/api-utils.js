export async function searchTMDBMovies(query) {
  const response = await fetch(`/.netlify/functions/movie-search-tmdb?query=${query}&page=1`);
  const json = await response.json();
  return json.data.results;
}