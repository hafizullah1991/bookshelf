import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import BookList from './components/BookList';
function App() {
  // cosnt url = " www.googleapis.com/books/v1/volumes?q=javascript"

  const [books , setBooks ] = useState([]);
  const [searchTerm , setSearchTerm] = useState('java')
  const [loading , setLoading] = useState(false);
useEffect(() => {
  fetchBooks();
}, [searchTerm])




  const fetchBooks = async () => {
    setLoading(true)
   const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
   const data = await res.json()
   console.log(data)
   setBooks(data.items || [])
   setLoading(false)
   
  }

  function handleSearch (query) {
    setSearchTerm(query)
  }
  return (
    <div className="App">
     <NavBar onSearch={handleSearch}/>
    <div className='d-flex justify-content-center align-items-center '>

   { loading ? <p className='display-3'> loading </p> : <BookList books={books}/>}

    </div>
     <Footer />
    </div>
  );
}

export default App;
