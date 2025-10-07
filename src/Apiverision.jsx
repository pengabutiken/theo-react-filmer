import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzJkYjdkMmQ5NjAzMGU4OGZlNDhjZjQ0OTIwODk1MyIsIm5iZiI6MTcxNDY1MTc3My45MzEsInN1YiI6IjY2MzM4MjdkYzYxNmFjMDEyODE5M2NmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jtLAJrH3afnqvkIvOadb9v7exk5p_DzcwwhtDR2zyA4'
  }
};

const filmID=[
    68722, //the master
    11602,//såsom
    110160,// laurnece
    11104, // chungking
    8051,// punch
    27324,//pulse
    3175,//barry
    3121,//nashville
    8927,//de ofrivilliga
    240,//gudfadern
]

  
function Apiverision() {
    const [movie, setMovie]=useState(null);


filmID.forEach(element => {
    console.log(element)
    
    
});
      useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/8051', options)
      .then(res => res.json())
      .then(res => {
        console.log(res); 
        setMovie(res);    
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className=" top-0 bg-gradient-to-r from-gray-950 to-black shadow-2xl p-4 sm:p-6 mb-10 z-10 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg tracking-tight truncate font-prata">
          a database of Theo's favorite movies, stored in various ways{" "}
          <span className=" text-purple-400">api</span>
        </h1>
        <div className="flex space-x-3 flex-shrink-0 justify-end">
          <Link
            to="/"
            className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-green-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
          >
            json
          </Link>
          <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 rounded-lg bg-transparent b text-red-300 font-prata transition shadow-md whitespace-nowrap hidden sm:inline-block hover:bg-white/10">
            Database
          </button>
        </div>
      </header>
      {movie ? <h1>{movie.title}</h1> : <p>Laddar...</p>}
      
    </div>
  );
}
export default Apiverision;
