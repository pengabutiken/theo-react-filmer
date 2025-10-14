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
      <footer className="bg-gradient-to-r from-gray-950 to-black text-white border-t border-gray-700 shadow-2xl p-6 sm:p-8 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
          <div className="flex-1 text-center sm:text-center">
            <h3 className="text-green-400 font-prata text-lg mb-2">Json</h3>
            <p className="text-sm text-gray-300 font-prata">
              Koden importerar filmdata från en JSON-fil och använder forEach
              för att gå igenom varje film. För varje film skapas ett nytt
              element som visar bild, titel, år, handling och regissör. Alla
              dessa element läggs till i listan filmer, som sedan visas på
              sidan. <br></br>
              <br></br>
              <i>
                {" "}
                <strong>Vad är meningen med denna webbplats?</strong>
              </i>{" "}
              <br></br>Den är rätt meningslös förutom att jag ville använda min fritid att öva på
              lagra och läsa objekt, saker jag fått lära mig i plugget. Kul och arbeta med filmdata alltid. 
            </p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-purple-400 font-prata text-lg mb-2">Api</h3>
            <p className="text-sm text-gray-300 font-prata">
              Koden använder useEffect för att köras när sidan laddas. Med fetch
              hämtas data från TMDb-API för varje film-ID. Alla hämtningar
              samlas med Promise.all, och resultatet sparas i movies med
              setMovie. I returdelen används map för att gå igenom alla filmer
              och visa titel, år, bild, handling och regissör.
              <br></br><br></br>
              <i> <strong> Vad har du använt för verktyg?</strong></i> <br></br>
              React, Css, HTML, JS, Firebase, JSX, JSON, React Router, Fetch API/Promise, Tailwind (för header och footer)
              
            </p>
          </div>

          <div className="flex-1 text-center sm:text-center">
            <h3 className="text-red-400 font-prata text-lg mb-2">Database</h3>
            <p className="text-sm text-gray-300 font-prata">
              Koden använder useEffect för att hämta filmdata från en
              Firebase-databas jag själv har skapat med hjälp av getDocs och collection. Resultatet
              lagras i statevariabeln movies via setMovies. Med map loopas alla
              filmer igenom och varje film visas på sidan med titel, år, bild,
              handling och regissör. <br></br><br></br>
                <i> <strong> Kontakt</strong></i> <br></br>
                Theo Björkqvist, theonils9@gmail.com

            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Databaseverision;
