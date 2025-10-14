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
          {film.id}. {film.title} <i class="year">({film.year})</i>
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
          <Link
            to="/DB"
            className="px-3 py-1 text-sm sm:px-4 sm:py-2 font-prata rounded-lg bg-transparent text-red-400 transition shadow-md whitespace-nowrap hover:bg-white/10"
          >
            Database
          </Link>
        </div>
      </header>

      {filmer}

      <div></div>
      <footer className="bg-gradient-to-r from-gray-950 to-black text-white border-t border-gray-700 shadow-2xl p-6 sm:p-8 mt-10">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
    
    <div className="flex-1 text-center sm:text-left">
      <h3 className="text-green-400 font-prata text-lg mb-2">json</h3>
      <p className="text-sm text-gray-300">
        This site showca
      </p>
    </div>

    <div className="flex-1 text-center">
      <h3 className="text-green-400 font-prata text-lg mb-2">Contact</h3>
      <p className="text-sm text-gray-300">Email: theo@example.com</p>
      <p className="text-sm text-gray-300">Instagram: @theosmovies</p>
    </div>

    <div className="flex-1 text-center sm:text-right">
      <h3 className="text-green-400 font-prata text-lg mb-2">More Info</h3>
      <p className="text-sm text-gray-300">Made with React + Firebase</p>
      <p className="text-sm text-gray-300">© 2025 Theo’s Movie Database</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
