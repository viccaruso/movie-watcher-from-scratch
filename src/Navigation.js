import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from './services/supabase-utils';
export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName='active-link' to='/list'>My Watchlist</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active-link' to='/search'>Search Movies</NavLink>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}
