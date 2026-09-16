import React from 'react'
import { NavLink, Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      asd
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
