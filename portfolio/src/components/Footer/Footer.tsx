import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section id="footer-section">
      <div className="row py-3">
        <div className="col-5 p-5">
          <p className="footer-title fs-4">Portfolio de Gastronomia</p>
          <p className="fs-5">Trabalho acadêmico apresentado à ETEC Professor Camargo Aranha • 3° Ano do Curso de Gastronomia.</p>
          <p className="fs-5">Orientadora: Prof. Denise Cussioli</p>
          <p className="footer-detail fs-5"><i>Site criado por: <a href="https://www.instagram.com/luisodan_m" className="text-primary">@luisodan_m</a> e <a href="https://www.instagram.com/israellefraim" className="text-primary">@israellefraim</a></i></p>
        </div>
        <div className="col-3 p-5 offset-1">
          <p className="footer-title fs-4">Integrantes</p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span><a href="https://www.instagram.com/vianakj._" className="text-body">Manuela Muniz Viana</a></p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span>Pietro Menezes Alves</p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span>Yasmin Santana Jorge</p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span>Larissa Teixeira</p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span>Yasmin Oliveira de Jesus</p>
        </div>
        <div className="col-3 p-5">
          <p className="footer-title fs-4">Seções</p>
          <p className="footer-text fs-5"><Link to="#hero-section" className="nav-link text-primary">Home</Link></p>
          <p className="footer-text fs-5"><Link to="#about-section" className="nav-link text-primary">Sobre</Link></p>
          <p className="footer-text fs-5"><Link to="#gallery-section" className="nav-link text-primary">Galeria</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Footer;