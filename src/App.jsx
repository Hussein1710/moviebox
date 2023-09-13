import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/movies/:id",
			element: <MovieDetailsPage />,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
