import "./App.css";
import filmdata from "./filmdata.json";
import { Link } from "react-router-dom";

function App() {
  const filmer = [];
  filmdata.forEach((film) => {
    filmer.push(
      <div class="filmcontainer">
        <img class="bild" alt="filmbild" key={film.id} src={film.poster}></img>
        <h2 class="titel" key={film.id}>
          {film.id}. {film.title}, <i class="year">({film.year})</i>
        </h2>
        <p class="plot" key={film.id}>
          {film.plot}
        </p>
        <p class="director" key={film.director}>
          directed by {film.director}{" "}
        </p>
      </div>
    );
  });
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className=" top-0 bg-gradient-to-r from-gray-950 to-black shadow-2xl p-4 sm:p-6 mb-10 z-10 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg tracking-tight truncate font-prata">
          a database of Theo's favorite movies, stored in various ways{" "}
          <span className=" text-green-400">json</span>
        </h1>
        <div className="flex space-x-3 flex-shrink-0 justify-end">
         <Link
  to="/Api"
  className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-purple-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
>
  API
</Link>
          <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 rounded-lg bg-transparent b text-red-300 font-prata transition shadow-md whitespace-nowrap hidden sm:inline-block hover:bg-white/10">
            Database
          </button>
        </div>
      </header>

      {filmer}

      <div></div>
    </div>
  );
}

export default App;
