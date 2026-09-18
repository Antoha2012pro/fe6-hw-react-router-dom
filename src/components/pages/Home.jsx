import React, { useEffect, useState } from "react";
import { getTrending } from "../../shared/api/tmdbAPI";
import { Link } from "react-router";

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getTrending();
      setTrends(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-5">
      <h2 className="text-3xl">Trending today</h2>

      <ol className="flex flex-col gap-1 list-disc pl-7">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <li
                key={idx}
                className="w-[75%] bg-gray-200 h-4 animate-pulse rounded"
              />
            ))
          : trends.map((item) => {
              if (!item.title) return;

              return (
                <li key={item.id}>
                  <Link
                    to={`/movies/${item.id}`}
                    className="leading-none text-blue-600 underline hover:text-blue-700 active:text-blue-900 transition"
                  >
                    {item.title || item.name}
                  </Link>
                </li>
              );
            })}
      </ol>
    </div>
  );
};

export default Home;
