import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="bg-primary text-white py-3">
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              src={logo}
              alt="MarketCali Logo"
              className="me-2 img-thumbnail"
            />
            MarketCali
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/productos" className="nav-link">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a href="/contactos" className="nav-link">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Iniciar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
