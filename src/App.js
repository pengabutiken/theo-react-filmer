import "./App.css";
import filmdata from "./filmdata.json";

function App() {
  const filmer = [];
  filmdata.forEach((film) => {
    filmer.push(
      <div class="filmcontainer">
        <h2 class="titel" key={film.id}>
          {film.title} <i class="year">{film.year}</i>{" "}
        </h2>

        <img class="bild" alt="filmbild" key={film.id} src={film.poster}></img>
        <p class="plot" key={film.id}>
          {film.plot}
        </p>
      </div>
    );
  });
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className=" top-0 bg-gradient-to-r from-gray-950 to-black shadow-2xl p-4 sm:p-6 mb-10 z-10 flex items-center justify-between border-b border-gray-700">
        <h1 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg tracking-tight truncate font-prata">
          en databas av filmer
        </h1>
        <div className="flex space-x-3 flex-shrink-0 justify-end">
          <button className="px-3 py-1 text-sm sm:px-4 sm:py-2  font-prata rounded-lg bg-transparent   text-white  transition shadow-md whitespace-nowrap hover:bg-white/10">
            API
          </button>
          <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 rounded-lg bg-transparent b text-white  font-prata transition shadow-md whitespace-nowrap hidden sm:inline-block hover:bg-white/10">
            Databas
          </button>
        </div>
      </header>

      {filmer}
    </div>
  );
}

export default App;
