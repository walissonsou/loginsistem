import React, { useState } from 'react';

const Search = ({  onSearch }) => {
  const [query, setQuery] = useState("");
  const handleClear = (query) => {
    setQuery ('');
    onSearch('');
  }

  return (
    <div className="search">
    <label htmlFor="query" className="label"> Procurar repositório </label>
    <input 
     type="text"
     name="query" 
     id="query" 
     value={query}
     onChange={(e) => setQuery(e.target.value)}
     />
    <button onClick={handleClear}> Limpar </button>
    <button onClick={() => onSearch(query)}> Procurar </button>
  </div>
  )
}
export default Search;
