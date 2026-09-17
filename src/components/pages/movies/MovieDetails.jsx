import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router";
import { getDetails, getImageUrl } from "../../../shared/api/tmdbAPI";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const fetchData = async () => {
    try {
      const data = await getDetails(movieId);
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <section className="flex flex-col py-1.5 border-t border-b border-gray-400">
        <a href="/" className="active:bg-cyan-200">
          Go back
        </a>
        <div className="flex gap-3">
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.original_title}
            className="w-50"
          />
          <div className="mt-2 space-y-2">
            <h2 className="text-2xl font-semibold">{movie.original_title}</h2>
            <p className="text-sm">User Score: {movie.vote_average * 10}%</p>
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-sm">{movie.overview}</p>
            <h4 className="text-lg font-semibold">Genres</h4>
            <p className="text-sm">
              {movie?.genres?.map((item) => item.name).join(", ")}
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="py-4 border-b border-gray-400">
            <h3>Additional information</h3>
            <ol>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ol>
        </div>
        <div className="py-4">
            <Outlet />
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
