import { useState } from "react";
import "./About.css";

import membro1 from "../../assets/images/membros/member_01.jpg";
import membro2 from "../../assets/images/membros/member_02.jpg";
import membro3 from "../../assets/images/membros/member_03.jpg";
import membro4 from "../../assets/images/membros/member_04.jpg";
import membro5 from "../../assets/images/membros/member_05.jpg";

function About() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <section className="about-section px-0 px-md-5 py-5" id="about-section">
      <div className="row">
        <div className="col-12 col-md-6 pt-0">
          <p className="about-tile fs-1 text-primary">SOBRE</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5">
          {selectedMember == null ? (
              <p className="about-text fs-4">Somos estudantes do 3º ano do curso Técnico em Gastronomia Integrado ao Ensino Médio da ETEC Professor Camargo Aranha. 
                <br></br><br></br>
                Este portfólio reúne parte da nossa trajetória ao longo do curso, apresentando experiências, técnicas e preparações desenvolvidas durante nossa formação. Entre ingredientes, receitas e diferentes formas de criar, encontramos na gastronomia um espaço para transformar conhecimento em expressão.
                <br></br><br></br>
                Cada prato carrega um pouco daquilo que aprendemos, experimentamos e construímos juntos.
                <br></br><br></br>
                Conheça um pouco mais sobre nós.
              </p>
            ) : (
              <div className="about-member-image-container">
                <img 
                  src={selectedMember}
                  className="about-member-image"
                  alt="Foto do Integrante">
                </img>
              </div>
            ) }          
        </div>
        <div className="col-12 col-md-6 fs-2 offset-md-1">
          <ul 
          className="about-text-members"
          onMouseLeave={() => setSelectedMember(null)}
          >
            <li onMouseEnter={() => setSelectedMember(membro1)}>
              <span>01</span>
              <span>Yasmin Santana Jorge</span>              
              <span>+</span>
            </li>
            <li onMouseEnter={() => setSelectedMember(membro2)}>
              <span>02</span>
              <span>Yasmin Oliveira de Jesus</span>              
              <span>+</span>              
            </li>
            <li onMouseEnter={() => setSelectedMember(membro3)}>
              <span>03</span>
              <span>Larissa Teixeira</span>              
              <span>+</span>
            </li>
            <li onMouseEnter={() => setSelectedMember(membro4)}>
              <span>04</span>
              <span>Manuela Muniz Viana</span>              
              <span>+</span>              
            </li>
            <li onMouseEnter={() => setSelectedMember(membro5)}>
              <span>5</span>
              <span>Pietro Menezes Alves</span>              
              <span>+</span>
            </li>            
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;
