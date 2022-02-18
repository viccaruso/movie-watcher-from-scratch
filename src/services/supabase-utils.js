import { client, checkError } from './client';

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
