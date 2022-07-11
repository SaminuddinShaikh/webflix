import { useState } from 'react';
import './searchMovie.css';
function SearchMovie({ query }) {
    const [searchQuery, setSearchQuery] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        // console.log("submited");
        query(searchQuery);
        setSearchQuery('');
    }

    return (
        <form className="search-movieForm" onSubmit={formSubmit}>
            <input className='search-input' type="search" placeholder="Search A Movie...." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {/* <input className='search-button' type="submit" value="Search" /> */}
        </form>
    )
}

export default SearchMovie;