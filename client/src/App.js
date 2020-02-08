import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FilmDetails from './FilmDetails'
import Home from './Home'

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/details/:id'>
            <FilmDetails></FilmDetails>
          </Route>
        </Switch>
      </div>
    </Router>

  )
  
}

export default App;
