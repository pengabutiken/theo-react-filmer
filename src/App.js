
import './App.css';
import filmdata from './filmdata.json'


function App() {

  const filmer = [];
  filmdata.forEach(film => {
    filmer.push(<div class="filmcontainer">
      <h2 class="titel" key={film.id}>{film.title}</h2>
      <h3 class="year"key={film.id}>{film.year}</h3>
      <p class="plot" key={film.id}>{film.plot}</p>
      <img class="bild" alt='filmbild' key={film.id} src={film.poster}></img>
    </div>
    )

  });
  return (

    <div> {filmer}</ div>





  )
}

export default App;
