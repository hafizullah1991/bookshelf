import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
function App() {
  // cosnt url = " www.googleapis.com/books/v1/volumes?q=javascript"

  const [books , setBooks ] = useState([]);

  useEffect (() =>{
    fetchBooks();
    console.log("books::" ,books)
  },[books])

  const fetchBooks = async () => {
   const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
   const data = await res.json()
   setBooks(data.items || [])
   
  }
  return (
    <div className="App">
     <NavBar />
     <Footer />
    </div>
  );
}

export default App;
