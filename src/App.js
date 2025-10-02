
import './App.css';
import filmdata from './filmdata.json'


function App() {

  


  const filmer = [];
  filmdata.forEach(film => {
    filmer.push(<div class="filmcontainer">
      <h2 class="titel" key={film.id}>{film.title}    <i class='year'>{film.year}</i> </h2>
     
      <img class="bild" alt='filmbild' key={film.id} src={film.poster}></img>
      <p class="plot" key={film.id}>{film.plot}</p>
    </div>
    )

  });
  return (

    <div> 
      {filmer}
      </ div>





  )
}

export default App;
