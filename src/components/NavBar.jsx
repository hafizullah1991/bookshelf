import SearchBar from "./SearchBar";

function NavBar ({onSearch}) {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">
      Bookshelf
    </a>
    <SearchBar onSearch={onSearch} />
  </div>
</nav>
    </div>
  )
}
export default NavBar;