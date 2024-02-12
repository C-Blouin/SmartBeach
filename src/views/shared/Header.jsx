// For any logos or assets to be placed in the header, import them above the component, and then reference them inside the component as needed.

function Header() {
  return (
    // Start of Header
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src="https://fakeimg.pl/60x60?text=Logo" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" id="home">
                Beach Information
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About the Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" id="contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    // End of Header
  );
}

export default Header;
