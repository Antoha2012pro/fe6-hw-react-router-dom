import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../../shared/api/tmdbAPI";
import { getAvatarUrl } from "../../../shared/helpers/getAvatarUrl";
import { renderStars } from "../../../shared/helpers/renderStars";
import Skeleton from "../../ui/Skeleton";

const MovieDetailReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    setIsLoading(true);

    getReviews(movieId)
      .then((data) => {
        setMovieReviews(data?.results || []);
      })
      .catch((error) => {
        console.error("Failed to load reviews:", error);
        setMovieReviews([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 pl-7">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Skeleton className="size-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    );
  }

  if (!movieReviews.length) {
    return <h2>We don't have any reviews for this movie.</h2>;
  }

  return (
    <div>
      <ul className="list-disc pl-7 flex flex-col gap-5">
        {movieReviews.map((review) => {
          const author = review.author_details;

          return (
            <li key={review.id} className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <img
                  src={getAvatarUrl(author?.avatar_path)}
                  alt={author?.username || "avatar"}
                  className="size-10 rounded-full object-cover"
                />
                <div className="flex flex-col flex-wrap">
                  <div className="flex gap-2 flex-wrap items-center">
                    {author?.name && (
                      <h3 className="text-lg font-semibold">{author.name}</h3>
                    )}
                    {author?.username && (
                      <p className="text-sm text-gray-500">
                        @{author.username}
                      </p>
                    )}
                  </div>

                  {renderStars(author?.rating)}
                </div>
              </div>

              <div className="flex gap-1 items-center">
                <p className="text-gray-800">{review?.content || ""}</p>
              </div>

              {review?.url && (
                <div className="flex gap-1 items-center">
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-none text-blue-600 underline hover:text-blue-700 active:text-blue-900 transition"
                  >
                    Go to Review
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieDetailReviews;