import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Link } from "react-router-dom";
import "./Css3.css";

function Databaseverision() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const getFilmer = await getDocs(collection(db, "filmer"));
      const movieList = getFilmer.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMovies(movieList);
    }
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className=" top-0 bg-gradient-to-r from-gray-950 to-black shadow-2xl p-4 sm:p-6 mb-10 z-10 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg tracking-tight truncate font-prata">
          a database of Theo's favorite movies, stored in various ways{" "}
          <span className=" text-red-400">database</span>
        </h1>
        <div className="flex space-x-3 flex-shrink-0 justify-end">
          <Link
            to="/"
            className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-green-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
          >
            Json
          </Link>
          <Link
            to="/Api"
            className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-purple-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
          >
            API
          </Link>
        </div>
      </header>
      <div className="movies-container">
        {movies.map((movie, index) => (
          <div key={movie.id} className="movie-card">
            <h2 class="titel3">
              {index + 1}. {movie.titel} <i class="year3"> ({movie.year})</i>
            </h2>
            <img class="bild3" src={movie.bild} alt={movie.title} width="200" />
            <p class="plot3">{movie.plot}</p>
            <p class="director3">directed by {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Databaseverision;
