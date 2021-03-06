import { useState, useEffect } from "react";
import "./Movies.css";
import { Spinner } from "react-bootstrap";
import MovieDetails from "./MovieDetails";

export default function Movies(props) {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInput(props.search);
  }, [props.search]);

  useEffect(() => {
    if (input.length > 0) {
      setIsLoading(true);
      fetch(`https://www.omdbapi.com/?apikey=bc306af4&s=${input}&plot=full`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search);
            setIsLoading(false);
          } else {
            setMovies(false);
            setIsLoading(false);
          }
        });
    }
  }, [input]);

  if (isLoading) {
    return (
      <div className="loading">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (!movies) {
    return (
      <div className="alert alert-danger" role="alert">
        No movies "{input}" found.
      </div>
    );
  }

  return (
    <div className="movies">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieDetails key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
