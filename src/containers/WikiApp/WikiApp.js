import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Search from '../Search/Search';
import History from '../History/History';

import './WikiApp.css';

const WikiApp = (props) => {
  // Logic for setting up localStorage
  // window.localStorage.clear()
  if (localStorage.getItem('history') === null) {
    const historyMap = []
    localStorage.setItem('history', JSON.stringify(historyMap));
  }

  return (
    // This section will always be present, no matter the route
    <div className="WikiApp">
      <header>
        <nav>
          <p className="logo">Wikipedia App</p>
          <ul>
            <li>  
              <NavLink
                to="/search"
                >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                >
              History
            </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div id="description">
        <p>
          A simple web app that allows you to search for Wikipedia articles, and see what articles you have searched up in the past.
        </p>
      </div>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/history" component={History} />
        <Redirect exact from='/' to='/search' />
        <Route render={() => <h1>404 Not found</h1>}></Route>
      </Switch>
    </div>
  )
};

export default WikiApp;