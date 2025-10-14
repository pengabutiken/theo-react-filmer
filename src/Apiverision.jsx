import React, { useEffect, useState } from "react";
import "./Css2.css";
import { Link } from "react-router-dom";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzJkYjdkMmQ5NjAzMGU4OGZlNDhjZjQ0OTIwODk1MyIsIm5iZiI6MTcxNDY1MTc3My45MzEsInN1YiI6IjY2MzM4MjdkYzYxNmFjMDEyODE5M2NmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jtLAJrH3afnqvkIvOadb9v7exk5p_DzcwwhtDR2zyA4",
  },
};

const filmID = [
  68722, //the master
  11602, //såsom
  110160, // laurnece
  11104, // chungking
  8051, // punch
  27324, //pulse
  3175, //barry
  3121, //nashville
  8927, //de ofrivilliga
  240,
  2009,
  1054867, //gudfadern
];

function Apiverision() {
  const [movies, setMovie] = useState([]);

  filmID.forEach((element) => {
    console.log(element);
  });

  useEffect(() => {
    const promises = filmID.map((id) =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`,
        options
      ).then((res) => res.json())
    );

    Promise.all(promises)
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((err) => console.error(err));
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
            Json
          </Link>
          <Link
            to="/DB"
            className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-red-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
          >
            Database
          </Link>
        </div>
      </header>
      <div class="filmwrapper2">
        {movies.map((movie, index) => (
          <div key={movie.id} class="filmcontainer2">
            <div class="titelbox2">
              {" "}
              <h2 class="titel2">
                {" "}
                {index + 1}. {movie.title} <br></br>
                <span>({movie.release_date.slice(0, 4)}) </span>
              </h2>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              class="bild2"
            />
            <div class="plot2">{movie.overview}</div>
            <div class="director2">
              directed by{" "}
              {movie.credits?.crew?.find((p) => p.job === "Director")?.name ||
                ""}
            </div>
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
export default Apiverision;
