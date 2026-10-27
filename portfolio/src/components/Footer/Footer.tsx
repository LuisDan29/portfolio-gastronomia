import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section id="footer-section">
      <div className="row py-3">
        <div className="col-12 col-md-5 p-md-5 px-4 py-3">
          <p className="footer-title fs-4 text-primary">
            Portfólio de Gastronomia 2026
          </p>
          <p className="fs-5 text-secondary">
            Trabalho acadêmico apresentado à ETEC Professor Camargo Aranha • 3°
            Ano do Curso de Gastronomia.
          </p>
          <p className="fs-5 text-secondary">
            Orientadora: Prof. Denise Cussioli
          </p>
          <p className="footer-detail fs-5 text-secondary">
            <i>
              Site criado por alunos do Curso Técnico Integrado ao Médio de
              Desenvolvimento de sistemas da ETEC Professor Camargo Aranha:{" "}
              <a
                href="https://www.linkedin.com/in/luisdan-marinho"
                className="text-secondary"
              >
                Luís Dantas
              </a>{" "}
              e{" "}
              <a
                href="https://www.linkedin.com/in/israellefraim/"
                className="text-secondary"
              >
                Israel Efraim
              </a>
            </i>
          </p>
        </div>
        <div className="col-12 col-md-3 offset-md-1 p-md-5 px-4 py-3">
          <p className="footer-title fs-4 text-primary">Integrantes</p>
          <p className="footer-text fs-5 text-secondary">
            <span className="material-symbols-outlined">arrow_outward</span>
            <a
              href="https://www.instagram.com/gastromanu._"
              className=" text-secondary"
            >
              Manuela Muniz Viana
            </a>
          </p>
          <p className="footer-text fs-5 text-secondary">
            <span className="material-symbols-outlined">arrow_outward</span>
            <a
              href="https://www.instagram.com/pietro_m.a._gastronomia"
              className=" text-secondary"
            >
              Pietro Menezes Alves
            </a>
          </p>
          <p className="footer-text fs-5 text-secondary">
            <span className="material-symbols-outlined">arrow_outward</span>
            <a
              href="https://www.instagram.com/yas.gastronomia"
              className=" text-secondary"
            >
              Yasmin Santana Jorge
            </a>
          </p>
          <p className="footer-text fs-5 text-secondary">
            <span className="material-symbols-outlined">arrow_outward</span>
            <a
              href="https://www.instagram.com/lariteixeira.gastro"
              className="text-secondary"
            >
              Larissa Teixeira
            </a>
          </p>
          <p className="footer-text fs-5 text-secondary">
            <span className="material-symbols-outlined">arrow_outward</span>
            <a
              href="https://www.instagram.com/yas.tecgastronomia"
              className="text-secondary"
            >
              Yasmin Oliveira de Jesus
            </a>
          </p>
        </div>
        <div className="col-12 col-md-3 p-md-5 px-4 py-3">
          <p className="footer-title fs-4 text-primary">Seções</p>
          <p className="footer-text fs-5">
            <Link to="#hero-section" className="nav-link text-primary">
              Home
            </Link>
          </p>
          <p className="footer-text fs-5">
            <Link to="#about-section" className="nav-link text-primary">
              Sobre
            </Link>
          </p>
          <p className="footer-text fs-5">
            <Link to="#gallery-section" className="nav-link text-primary">
              Galeria
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
