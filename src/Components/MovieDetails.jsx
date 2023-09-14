import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { SidebarData } from "./SidebarData";
import Logo from "../assets/Logo.png";
import poster from "../assets/poster.png";
import Group from "../assets/Group.png";
import { FaPaperclip } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async (movieId) => {
    try {
      const apiKey = "ac19c1209b3c6763bb59ab9edd1e1202";
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      // console.log(res)
      setMovie(res.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching movie details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  return (
    <div className="flex gap-3 overflow-hidden h-screen">
      <div className="gap-6 border-r-2 border-r-slate-200 rounded-r-[15px]">
        <img src={Logo} alt="Logo" className="bg-slate-700 " />
        {SidebarData.map((item, index) => (
          <div key={index}>
            <Link
              to={item.path}
              className="flex items-center p-6 hover:bg-slate-400"
            >
              <span className="pr-2">{item.icon}</span>
              <span className="">{item.title}</span>
            </Link>
          </div>
        ))}
        <div className="border border-slate-300 py-2 px-2 flex flex-col items-center rounded-lg">
          <p className="font-bold text-[15px]">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[#666666]">50k people are playing now</p>
          <button className="bg-[#BE123CB2] rounded-lg px-1 py-1 mt-2 hover:bg-[#9c475db2] ">
            stop playing
          </button>
        </div>
      </div>

      {loading ? (
        <Loader showLoader={loading} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="overflow-y-auto">
          <img src={poster} alt="movie-poster" className="mt-3" />
          <div className="flex gap-2">
            <h2 data-testid="movie-title" className="font-bold">
              {movie.title}
            </h2>
            <p data-testid="movie-release-date">{movie.release_date}</p>
            <p data-testid="movie-runtime">{movie.runtime} minutes</p>
          </div>
          <div className="">
            <p data-testid="movie-overview" className="mt-4">
              {movie.overview}
            </p>
            <div className="flex gap-3 mt-4">
              <p>Director:</p>
              <p className="text-[#BE123C]">Joseph Kosinski</p>
              <p>Writers:</p>{" "}
              <p className="text-[#BE123C]">
                Jim Cash, Jack Epps Jr, Peter Craig
              </p>
              <p>Stars:</p>{" "}
              <p className="text-[#BE123C]">
                Tom Cruise, Jennifer Connelly, Miles Teller{" "}
              </p>
            </div>
            <div className="flex flex-col w-1/4 gap-3 mt-3">
              <button className="bg-[#BE123C] px-6 py-1 text-white gap-2 flex items-center hover:bg-[#e6b2bf] hover:text-black rounded-md">
                {" "}
                <FaPaperclip /> See Showtimes
              </button>
              <button className="bg-[#BE123C] px-2 py-1 text-white gap-2 flex items-center  hover:bg-[#e6b2bf] hover:text-black rounded-md">
                {" "}
                <IoMdOptions /> More watch options
              </button>
              <img src={Group} alt="GROUP" className="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
