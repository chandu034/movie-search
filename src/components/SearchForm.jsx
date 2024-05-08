import { useState } from "react";
const SearchForm =({onSearch}) => {
    const [query, setQuery] = useState('');


    const handleChange =(e) =>{
        setQuery(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        onSearch(query);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h5> Hello, What movie are you looking for today ?</h5>
                <input 
                type='text' 
                placeholder="Search for a movie..."
                value={query}
                onChange={handleChange}
                />
                <button type="Submit"> Search </button>
            </div>
        </form>
        
    )
}
export default SearchForm;