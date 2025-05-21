import './BookCard.css'

function BookCard({ book }) {
  const volumeInfo = book?.volumeInfo;
  const title = volumeInfo?.title || "No Title";
  const authors = volumeInfo?.authors?.join(", ") || "Unknown Author";
  const thumbnail =
    volumeInfo?.imageLinks?.thumbnail ||
    "https://via.placeholder.com/128x193?text=No+Image";
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body text-center d-flex flex-column align-items-center">
          <h5 className=" card-title"> {title}</h5>
          <p className="card-text"> {authors}</p>
          <button className="btn btn-primary">See More </button>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
