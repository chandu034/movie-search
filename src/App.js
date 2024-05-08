import './App.css';
import SearchForm from './components/SearchForm.jsx';
import { useState } from 'react';
import MovieList from './components/MovieList.jsx';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const apiKey = '8176e2ee'; // Replace with your OMDb API key
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        console.log("Data",data);
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Find Your Movie</h1>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;