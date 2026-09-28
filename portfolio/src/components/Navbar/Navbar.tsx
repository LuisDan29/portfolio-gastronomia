import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar sticky-top bg-body navbar-expand-lg border-bottom border-secondary border-1">
      <div className="container-fluid">
        <Link to="#hero-section" className="navbar-brand navbar-logo text-primary">3TB</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav items-container">
            <li className="nav-item">
              <Link to="#hero-section" className="nav-link text-primary">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="#about-section" className="nav-link text-primary">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="#gallery-section" className="nav-link text-primary">Galeria</Link>
            </li>
            <li className="nav-item">
              <Link to="#footer-section" className="nav-link text-primary">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;