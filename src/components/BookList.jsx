import React from 'react'
import BookCard from './BookCard'

const BookList = ({books}) => {
  return (
    <div className='row'>
      {books.map((book, index)=>(
        
          <BookCard key={index} book={book} />
         

      ))}
    </div>
  )
}

export default BookList
