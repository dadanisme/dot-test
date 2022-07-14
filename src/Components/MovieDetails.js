export default function MovieDetails({ movie }) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={movie.Poster}
          alt={movie.Title}
          style={{ width: "100%" }}
        />
        <div className="card-wrapper">
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>
          </div>
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="imdb-button"
          >
            View on IMDB
          </a>
        </div>
      </div>
    </div>
  );
}
