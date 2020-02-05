import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DetailPage from "./views/DetailPage";

import CardList from "./components/CardList";

export default function App() {
  return (
    <Router>
      <div className="container mt-5 justify-content-center d-flex flex-column">
        <h3 className="text-center">Top 50</h3>

        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Large button group"
        >
          <Link className="btn btn-outline-info" to="/">
            Anime
          </Link>
          <Link className="btn btn-outline-info" to="/manga">
            Manga
          </Link>
          <Link className="btn btn-outline-info" to="/characters">
            Character
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            <CardList type="anime" />
          </Route>
          <Route exact path="/manga">
            <CardList type="manga" />
          </Route>
          <Route exact path="/characters">
            <CardList type="characters" />
          </Route>
          <Route exact path="/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
