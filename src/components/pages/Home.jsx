import React, { useEffect, useState } from "react";
import { getTrending } from "../../shared/api/tmdbAPI";

const Home = () => {
    const [trends, setTrends] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getTrending();
      setTrends(data.results)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      <ol>
        {trends.map((item) => (
          <li key={item.id}>
            <a href={`/movies/${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
