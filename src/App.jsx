import React from "react";
import { NavLink, Outlet } from "react-router";
import { cn } from "./shared/utils/cn";

const App = () => {
  return (
    <div>
      <header className="w-full px-4 py-6 shadow-lg">
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn("text-gray-700 text-xl", { "text-rose-400": isActive })
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              cn("text-gray-700 text-xl", { "text-rose-400": isActive })
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <section className="py-6 px-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default App;
