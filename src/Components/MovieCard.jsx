import { useState } from "react";
import { Link } from "react-router-dom";
import Dunkirk from "../assets/Dunkirk.svg"

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div data-testid="movie-card" className="">
      <Link to={`movies/${movie.id}`}>
        {/* <img
          data-testid="movie-poster"
          className="w-full"
          src={movie.poster_path}
          alt="movie_poster"
        /> */}
		<img
          data-testid="movie-poster"
          className="w-full"
          src={Dunkirk}
          alt="movie_poster"
        />
      </Link>
      <div className="flex items-center space-y-3 flex-col py-3">
        <h2 data-testid="movie-title" className="font-bold">{movie.title}</h2>
        <p data-testid="movie-release-date">{movie.release_date}</p>
        <button
          className={`rounded-md p-2 ${
            isLiked ? "bg-red-500 text-white" : "bg-green-500 text-white"
          }`}
          onClick={handleLike}
        >
          {isLiked ? "Unlike 👎" : "Like 👍"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
