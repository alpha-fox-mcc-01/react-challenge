import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './views/Home';
import About from './views/About';
import MovieDetail from './views/MovieDetail';
import NoMatch from './components/NoMatch';

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <nav className="navbar navbar-dark bg-black justify-content-start">
          <Link className="link-nav p-1 pr-4" to="/"><strong>IndoXXI 2.0</strong></Link>
          <Link className="link-nav p-1" to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
