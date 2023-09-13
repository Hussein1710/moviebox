import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const fetchMovie = () => {
		const apiKey = "ac19c1209b3c6763bb59ab9edd1e1202";
		axios.get(`https://api.themoviedb.org/3/movie/popular`, {
			params: {
				api_key: apiKey,
			},
		}).then((response) => {
			const movieData = response.data.results;
			setMovies(movieData.slice(0, 10)); // Get the first 10 movies
		});
	};

	useEffect(() => {
		fetchMovie();
	}, []);
	return (
		<div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default MovieList;
