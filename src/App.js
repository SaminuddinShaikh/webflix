import { useState, useEffect } from 'react';
import './App.css';
import MovieList from './compnents/movieList'
import SearchMovie from './compnents/searchMovie'

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");


  const fetchMovie = async (searchedMovie) => {
    const url = `http://www.omdbapi.com/?apikey=3c5a5570&s=${searchedMovie}`;
    const apiResponse = await fetch(url);
    const responseJSON = await apiResponse.json();
    // console.log(responseJSON);
    if (responseJSON["Search"] != undefined) {
      setMovies(responseJSON["Search"])
    }
  }

  useEffect(() => {
    fetchMovie(query);
  }, [query]);

  const searchQuery = (q) => {
    // console.log("parent:", q);
    setQuery(q);
  }

  return (
    <div className="App">
      <h1 className='logo'>WebFlix</h1>
      <SearchMovie
        query={searchQuery}
      />
      <div className="poster-section">
        {/* <div className="heading">
          <h1>Watch list</h1>
        </div> */}
        <div className="movie-list">
          <MovieList
            movieData={movies}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
