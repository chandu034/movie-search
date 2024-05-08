import './App.css';
import SearchForm from './components/SearchForm.jsx';

function App() {
  const handleSearch =(query) =>{
    console.log('Search Query')
  }
  return (
    <div className="App">
      <h1> Find Your Movie </h1>
      <SearchForm onSearch={handleSearch}/>
    </div>
  );
}

export default App;
