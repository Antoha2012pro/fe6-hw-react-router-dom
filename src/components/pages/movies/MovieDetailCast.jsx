import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits, getImageUrl } from "../../../shared/api/tmdbAPI";
import Skeleton from "../../ui/Skeleton";

const MovieDetailCast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);

    getCredits(movieId)
      .then((data) => {
        setMovieCast(data?.cast || []);
      })
      .catch((error) => {
        console.error("Failed to load cast:", error);
        setMovieCast([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 pl-7">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="w-[150px] h-[225px] rounded-md" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-40" />
          </div>
        ))}
      </div>
    );
  }

  if (!movieCast.length) {
    return <h2>We don't have any cast information for this movie.</h2>;
  }

  return (
    <div>
      <ul className="list-disc pl-7 flex flex-col gap-5">
        {movieCast.slice(0, 10).map((actor) => (
          <li key={actor.id} className="space-y-2">
            <img
              src={
                actor.profile_path
                  ? getImageUrl(actor.profile_path)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaia678yAXVtva77Nr4PPbVP8AjxoJgeeRVeZQEBurhw&s=10"
              }
              alt={actor.original_name || actor.name}
              className="w-37.5 rounded-md object-cover"
            />
            <p className="font-semibold">{actor.name}</p>
            <p className="text-sm text-gray-600">Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailCast;