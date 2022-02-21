import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export function getUser() {
  // if has session return session user
  return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '/');
}

export async function getWatchList() {
  const response = await client
    .from('movie_watchlist')
    .select();

  return checkError(response);
}

export async function addMovieToWatchList(movie) {
  const response = await client
    .from('movie_watchlist')
    .insert(movie);

  return checkError(response);
}

export async function toggleWatched(id, watched) {
  const response = await client
    .from('movie_watchlist')
    .update({ watched: !watched })
    .match({ id })
    .single();
}