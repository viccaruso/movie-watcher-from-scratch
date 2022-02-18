import { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  const [userSession, setUserSession] = useState('');
  return (
    <BrowserRouter>
      <div>
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
                ? <p>/auth</p>
                : <Redirect to='/' />
            }
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
