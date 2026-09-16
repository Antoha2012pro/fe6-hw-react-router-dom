import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../components/pages/Home";
import Movies from "../components/pages/Movies";
import MovieDetails from "../components/pages/movies/MovieDetails";
import MovieSearch from "../components/pages/movies/MovieSearch";
import MovieDetailCast from "../components/pages/movies/MovieDetailCast";
import MovieDetailReviews from "../components/pages/movies/MovieDetailReviews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "movies",
        Component: Movies,

        children: [
          {
            index: true,
            Component: MovieSearch,
          },
          {
            path: ":movieId",
            Component: MovieDetails,
            children: [
                {
                    path: "cast",
                    Component: MovieDetailCast,
                },
                {
                    path: "reviews",
                    Component: MovieDetailReviews,
                },
            ]
          },
        ],
      },
    ],
  },
]);

export default router;
