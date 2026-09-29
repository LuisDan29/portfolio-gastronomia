import panificacao1 from "../assets/images/panificacao/IMG-1.jpg";
import panificacao2 from "../assets/images/panificacao/IMG-2.jpg";
import panificacao3 from "../assets/images/panificacao/IMG-3.jpg";
import panificacao4 from "../assets/images/panificacao/IMG-4.jpg";
import panificacao5 from "../assets/images/panificacao/IMG-5.jpg";
import panificacao6 from "../assets/images/panificacao/IMG-6.jpg";

import confeitaria1 from "../assets/images/confeitaria/IMG-1.jpg";
import confeitaria2 from "../assets/images/confeitaria/IMG-2.jpg";
import confeitaria3 from "../assets/images/confeitaria/IMG-3.jpg";
import confeitaria4 from "../assets/images/confeitaria/IMG-4.jpg";
import confeitaria5 from "../assets/images/confeitaria/IMG-5.jpg";
import confeitaria6 from "../assets/images/confeitaria/IMG-6.jpg";

import fria1 from "../assets/images/cozinha-fria/IMG-1.jpg";
import fria2 from "../assets/images/cozinha-fria/IMG-2.jpg";
import fria3 from "../assets/images/cozinha-fria/IMG-3.jpg";
import fria4 from "../assets/images/cozinha-fria/IMG-4.jpg";
import fria5 from "../assets/images/cozinha-fria/IMG-5.jpg";
import fria6 from "../assets/images/cozinha-fria/IMG-6.jpg";
import fria7 from "../assets/images/cozinha-fria/IMG-7.jpg";

import fichaTecnica3 from "../assets/documents/ficha_tecnica_urso_sem_curso.pdf";

import quente1 from "../assets/images/cozinha-quente/IMG-1.jpg";
import quente2 from "../assets/images/cozinha-quente/IMG-2.jpg";
import quente3 from "../assets/images/cozinha-quente/IMG-3.jpg";
import quente4 from "../assets/images/cozinha-quente/IMG-4.jpg";
import quente5 from "../assets/images/cozinha-quente/IMG-5.jpg";
import quente6 from "../assets/images/cozinha-quente/IMG-6.jpg";
import quente7 from "../assets/images/cozinha-quente/IMG-7.jpg";

export const galleries = [
  {
    id: 1,
    title: "PANIFICAÇÃO",
    description: "Produção de alimentos fermentados e assados, servindo produtos como pães artesanais, torradas, brioches, croissants e massas de pizza.",
    images: [
      { id: 1, doc: "", src: panificacao1, alt: "Pão com Gotas de Chocolate" },
      { id: 2, doc: "", src: panificacao2, alt: "Chipa" },
      { id: 3, doc: "", src: panificacao3, alt: "Pão de Cachorro Quente" },
      { id: 4, doc: "", src: panificacao4, alt: "Pão Challa" },
      { id: 5, doc: "", src: panificacao5, alt: "Foccacia Pugliese" },
      { id: 6, doc: "", src: panificacao6, alt: "Pão Brioche" }
    ]
  },
  {
    id: 2,
    title: "CONFEITARIA",
    description: "Produção de sobremesas e doces refinados, servindo criações como bolos, tortas, bombons, mousses, petit fours e compotas.",
    images: [
      { id: 1, doc: "", src: confeitaria1, alt: "Churros com Doce de Leite e Chocolate" },
      { id: 2, doc: "", src: confeitaria2, alt: "Tiramisu com Brownie de Café" },
      { id: 3, doc: "", src: confeitaria3, alt: "Cuca de Banana" },
      { id: 4, doc: "", src: confeitaria4, alt: "Torta de Limão" },
      { id: 5, doc: "", src: confeitaria5, alt: "Bombom de Caramelo" },
      { id: 6, doc: "", src: confeitaria6, alt: "Rocambole de Brigadeiro" }
    ]
  },
  {
    id: 3,
    title: "COZINHA FRIA",
    description: "Preparo de alimentos servidos em temperaturas baixas ou ambientes, como saladas, carpaccios, tartares, sanduíches e entradas frias.",
    images: [
      { id: 1, doc: "", src: fria1, alt: "Salada Refrescante com Toranja e Coulis de Maracujá" },
      { id: 2, doc: "", src: fria2, alt: "Evento Natura EKOS" },
      { id: 3, doc: fichaTecnica3, src: fria3, alt: "Fun Food \"Urso sem Curso\"" },
      { id: 4, doc: "", src: fria4, alt: "Patê de Curry com Pérolas de Coentro" },
      { id: 5, doc: "", src: fria5, alt: "Evento BYD Coffee Break" },
      { id: 6, doc: "", src: fria6, alt: "Ceviche de Tilápia" },
      { id: 7, doc: "", src: fria7, alt: "Hommus" }
    ]
  },
  {
    id: 4,
    title: "COZINHA QUENTE",
    description: "Preparo de alimentos que utilizam calor para sua cocção, servindo pratos como grelhados, assados, ensopados, massas e sopas.",
    images: [
      { id: 1, doc: "", src: quente1, alt: "Massa Fresca de Macarrão com Molho de Tomate Rústico" },
      { id: 2, doc: "", src: quente2, alt: "Frango Kiev com Manteiga Temperada e Chips de Mandioca e Batata" },
      { id: 3, doc: "", src: quente3, alt: "Entrevero de Pinhão" },
      { id: 4, doc: "", src: quente4, alt: "Arroz de Braga e Bolinho de Bacalhau" },
      { id: 5, doc: "", src: quente5, alt: "Picadinho com Couscous Marroquino e Legumes Salteados" },
      { id: 6, doc: "", src: quente6, alt: "Carne Seca com Farinha de Mandioca e Banana da Terra Frita" },
      { id: 7, doc: "", src: quente7, alt: "Picanha com Manteiga Temperada, Arroz e Farofa" }
    ]
  }
];