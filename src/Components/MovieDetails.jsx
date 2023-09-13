import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState();
  const fetchMovieDetails = (movieId) => {
    
    const apiKey = "ac19c1209b3c6763bb59ab9edd1e1202";
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
        // console.log(movieDetails)
        // setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching movie details. Please try again later.");
      });
  };
  useEffect(() => {
    fetchMovieDetails(id);
  }, []);

  return (
    <div>
      <div>
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">{movie.release_date}</p>
        <p data-testid="movie-runtime">{movie.runtime} minutes</p>
        <p data-testid="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
