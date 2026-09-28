import "./Footer.css";

function Footer() {
  return (
    <section id="footer-section">
      <div className="row py-3">
        <div className="col-5 p-5">
          <p className="footer-title fs-4">Portfolio de Gastronomia</p>
          <p className="fs-5">Trabalho acadêmico apresentado à ETEC Professor Camargo Aranha • 3° Ano do Curso de Gastronomia</p>
          <p className="footer-detail fs-5"><i>Site criado por: @luisodan_m e @israellefraim</i></p>
        </div>
        <div className="col-3 p-5 offset-1">
          <p className="footer-title fs-4">Integrantes</p>
          <p className="footer-text fs-5"><span class="material-symbols-outlined">arrow_outward</span>Manuela Muniz Viana</p>
          <p className="footer-text fs-5"><span class="material-symbols-outlined">arrow_outward</span>Pietro Menezes Alves</p>
          <p className="footer-text fs-5"><span class="material-symbols-outlined">arrow_outward</span>Yasmin Santana Jorge</p>
          <p className="footer-text fs-5"><span class="material-symbols-outlined">arrow_outward</span>Larissa Teixeira</p>
          <p className="footer-text fs-5"><span class="material-symbols-outlined">arrow_outward</span>Yasmin Oliveira de Jesus</p>
        </div>
        <div className="col-3 p-5">
          <p className="footer-title fs-4">Seções</p>
          <p className="footer-text fs-5">Home</p>
          <p className="footer-text fs-5">Sobre</p>
          <p className="footer-text fs-5">Galeria</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;