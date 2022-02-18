import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import Navigation from './Navigation';
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
                ? <p>/list</p>
                : <Redirect to='auth' />
            }
          </Route>
          <Route exact path='/search'>
            {
              userSession
                ? <p>/search</p>
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
