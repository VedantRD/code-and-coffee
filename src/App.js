import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <BrowserRouter>
      <div className='h-100'>
        <Switch>
          {!isLoggedIn ?
            <Route exact path='/'>
              <Login setIsLoggedIn={setIsLoggedIn}></Login>
            </Route>
            :
            <Route exact path='/'>
              <Dashboard setIsLoggedIn={setIsLoggedIn}></Dashboard>
            </Route>
          }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
