import { useState } from "react";
import "./About.css";

import { members } from "../../data/members";

function About() {
  // Desktop: o cartão da esquerda segue o mouse
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  // Celular/tablet: qual linha está aberta
  const [openId, setOpenId] = useState<number | null>(null);

  const displayedMember = members.find((m) => m.id === hoveredId);

  return (
    <section className="about-section px-0 px-md-5 py-5" id="about-section">
      <div className="row px-4 px-md-2">
        <div className="col-12 col-md-6 pt-0">
          <p className="about-title fs-1 text-primary">SOBRE</p>
        </div>
      </div>
      <div className="row px-4 px-md-2 about-content">
        <div className="col-12 col-lg-5 about-stage">
          <div
            className={`about-intro-card ${displayedMember ? "d-lg-none" : ""}`}
          >
            <p>
              Somos estudantes do 3°ano do curso tecnico em Gastronomia
              integrado ensino médio da ETEC Professor Camargo Aranha, Formandos
              2026.
            </p>
            <p>
              Este portfólio reúne parte da nossa trajetória ao longo do curso,
              apresentando experiências técnicas e preparações desenvolvidas
              durante nossa formação. Entre ingredientes, receitas e diferentes
              formas de criar, encontramos na gastronomia um espaço para
              transformar conhecimento em expressão.
            </p>
            <p>
              Cada prato carrega um pouco daquilo que aprendemos, experimentamos
              e construímos juntos.
            </p>
            <p>Conheça um pouco mais sobre nós.</p>
          </div>

          {displayedMember && (
            <figure
              className="about-member-card d-none d-lg-block"
              key={displayedMember.id}
            >
              <img
                src={displayedMember.photo}
                alt={`Foto de ${displayedMember.name}`}
                className="about-member-card-image"
              />
              <figcaption className="about-member-card-bio">
                {displayedMember.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </figcaption>
            </figure>
          )}
        </div>

        <div className="col-12 col-lg-7 ps-lg-4 fs-2">
          <ul
            className="about-text-members"
            onMouseLeave={() => setHoveredId(null)}
          >
            {members.map((member, index) => {
              const isOpen = openId === member.id;
              return (
                <li
                  key={member.id}
                  className={isOpen ? "is-open" : ""}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onFocus={() => setHoveredId(member.id)}
                  onBlur={() => setHoveredId(null)}
                >
                  <button
                    type="button"
                    className="about-member-toggle"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : member.id)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{member.name}</span>
                    <span className="about-member-sign">+</span>
                  </button>

                  {/* Painel que abre embaixo do nome (só celular/tablet) */}
                  <div
                    className="about-member-panel d-lg-none"
                    aria-hidden={!isOpen}
                  >
                    <div className="about-member-panel-inner">
                      <div className="about-member-panel-card">
                        <img
                          src={member.photo}
                          alt={`Foto de ${member.name}`}
                          className="about-member-panel-photo"
                          loading="lazy"
                        />
                        <div className="about-member-panel-bio">
                          {member.bio.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
