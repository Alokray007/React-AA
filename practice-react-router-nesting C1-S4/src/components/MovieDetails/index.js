import { useParams } from "react-router-dom";
import { movies } from "../../data/movieData";

function MovieDetails(props) {
  const { movieId } = useParams();
  const movieChoice = props.movies.find(
    (movie) => movie.id === parseInt(movieId)
  );

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
