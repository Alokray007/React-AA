import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails/index";

function Movies(...props) {
  const { movies } = props[0];

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
