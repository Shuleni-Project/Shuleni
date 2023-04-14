import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <Link to="/student">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Students
        </button>
      </Link>
      <Link to="/admin">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Admin
        </button>
      </Link>
      <Link to="/educator">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Educator
        </button>
      </Link>
    </div>
  )
}

export default LandingPage