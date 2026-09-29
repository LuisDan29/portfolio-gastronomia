import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section id="footer-section">
      <div className="row py-3">
        <div className="col-12 col-md-5 p-md-5 px-4 py-3">
          <p className="footer-title fs-4">Portfolio de Gastronomia</p>
          <p className="fs-5">Trabalho acadêmico apresentado à ETEC Professor Camargo Aranha • 3° Ano do Curso de Gastronomia.</p>
          <p className="fs-5">Orientadora: Prof. Denise Cussioli</p>
          <p className="footer-detail fs-5"><i>Site criado por: <a href="https://www.linkedin.com/in/luisdan-marinho" className="text-primary">Luís Dantas</a> e <a href="https://www.linkedin.com/in/israellefraim/" className="text-primary">Israel Efraim</a></i></p>
        </div>
        <div className="col-12 col-md-3 offset-md-1 p-md-5 px-4 py-3">
          <p className="footer-title fs-4">Integrantes</p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span><a href="https://www.instagram.com/gastromanu._" className="text-body">Manuela Muniz Viana</a></p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span><a href="https://www.instagram.com/pietro_m.a._gastronomia" className="text-body">Pietro Menezes Alves</a></p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span><a href="https://www.instagram.com/yas.gastronomia" className="text-body">Yasmin Santana Jorge</a></p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span><a href="https://www.instagram.com/lariteixeira.gastro" className="text-body">Larissa Teixeira</a></p>
          <p className="footer-text fs-5"><span className="material-symbols-outlined">arrow_outward</span><a href="https://www.instagram.com/yas.tecgastronomia" className="text-body">Yasmin Oliveira de Jesus</a></p>
        </div>
        <div className="col-12 col-md-3 p-md-5 px-4 py-3">
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