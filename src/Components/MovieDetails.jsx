/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchMovieDetails = async (movieId) => {
		try {
			const apiKey = "ac19c1209b3c6763bb59ab9edd1e1202";
			const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
				params: {
					api_key: apiKey,
				},
			});
			setMovie(res.data);
			setLoading(false);
		} catch (err) {
			setError("Error fetching movie details. Please try again later.");
		}
	};

	useEffect(() => {
		fetchMovieDetails(id);
	}, []);

	return (
		<div>
			{loading ? (
				<Loader showLoader={loading} />
			) : error ? (
				<p>{error}</p>
			) : (
				<div>
					<h2 data-testid="movie-title">{movie?.title}</h2>
					<p data-testid="movie-release-date">{movie?.release_date}</p>
					<p data-testid="movie-runtime">{movie?.runtime} minutes</p>
					<p data-testid="movie-overview">{movie?.overview}</p>
				</div>
			)}
		</div>
	);
};

export default MovieDetails;
