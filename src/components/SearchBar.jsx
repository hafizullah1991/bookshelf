import { useState } from "react";

function SearchBar ({onSearch}) {
  const [searchTerm, setSearchTerm ] = useState('');
  function handleSubmit (e) {
    e.preventDefault();
    onSearch(searchTerm)
  }
  const handleChange =(e)=>{ setSearchTerm(e.target.value)}
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="de-flex">
        <input value={searchTerm} onChange={handleChange} className='form-control' type="text"
        placeholder="Search books" 
        />
      </form>
    </div>
  )
}
export default SearchBar;