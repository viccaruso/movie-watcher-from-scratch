import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import Navigation from './Navigation';
import SearchPage from './SearchPage';
import { getUser } from './services/supabase-utils';

function App() {
  const [userSession, setUserSession] = useState(getUser());

  useEffect(() => {
    setUserSession(getUser());
  }, []);

  return (
    <BrowserRouter>
      <div>
        {
          userSession && <Navigation />
        }
        <Switch>
          <Route exact path='/'>
            {
              userSession
                ? <Redirect to='/list' />
                : <Redirect to='/auth' />
            }
          </Route>
          <Route exact path='/list'>
            {
              userSession
                ? <ListPage />
                : <Redirect to='auth' />
            }
          </Route>
          <Route exact path='/search'>
            {
              userSession
                ? <SearchPage />
                : <Redirect to='/auth' />
            }
          </Route>
          <Route exact path='/auth'>
            {
              !userSession //user does not have active session
                ? <AuthPage setUserSession={setUserSession} />
                : <Redirect to='/' />
            }
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
