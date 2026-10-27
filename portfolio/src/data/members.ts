import membro1 from "../assets/images/membros/member_01.jpg";
import membro2 from "../assets/images/membros/member_02.jpg";
import membro3 from "../assets/images/membros/member_03.jpg";
import membro4 from "../assets/images/membros/member_04.jpg";
import membro5 from "../assets/images/membros/member_05.jpg";

export type Member = {
  id: number;
  name: string;
  photo: string;
  bio: string[];
};

export const members: Member[] = [
  {
    id: 1,
    name: "Yasmin Santana Jorge",
    photo: membro1,
    bio: [
      "Eu sou Yasmin Santana, tenho 18 anos e minha carreira profissional na gastronomia começou com o curso M-Tec em Gastronomia na Etec Professor Camargo Aranha. Aprendi sobre técnicas e aprimorei. Participei de eventos importantes como auxiliar de chefs no Mesa São Paulo de 2024 e 2025.",
    ],
  },
  {
    id: 2,
    name: "Yasmin Oliveira de Jesus",
    photo: membro2,
    bio: [
      "Sou Yasmin Oliveira, tenho 18 anos e sou estudante de Gastronomia. Minha trajetória começou no curso M-Tec em Gastronomia na Etec Professor Camargo Aranha, onde desenvolvi conhecimentos em técnicas de preparo, montagem de pratos, boas práticas de manipulação e organização na cozinha.",
      "Durante minha formação, participei de eventos realizados pela escola e, em 2025, tive a oportunidade de atuar como auxiliar de chefs no Mesa São Paulo, experiência que contribuiu para meu desenvolvimento e aprendizado profissional.",
    ],
  },
  {
    id: 3,
    name: "Larissa Teixeira",
    photo: membro3,
    bio: [
      "Me chamo Larissa Teixeira, tenho 17 anos de idade, sou estudante de gastronomia e minha trajetória começou no curso M-Tec em Gastronomia na Etec Professor Camargo Aranha, onde desenvolvi conhecimentos em técnicas de preparo, montagem de pratos, boas práticas de manipulação e organização na cozinha.",
      "Durante minha formação, fui em visitas técnicas relacionadas ao curso, participei de eventos realizados pela escola e, em 2025, fui ao Mesa São Paulo, onde pude conhecer e auxiliar chefs de cozinha.",
    ],
  },
  {
    id: 4,
    name: "Manuela Muniz Viana",
    photo: membro4,
    bio: [
      "Me chamo Manuela Muniz Viana, tenho 18 anos, sou estudante de gastronomia e meu início nessa area se deu ao curso M-Tec de gastronomia na Etec Professor Camargo Aranha, onde aprendi e desenvolvi habilidades tecnicas de preparo de diversos pratos para o meio profissional. Participei duas vezes seguidas, nos anos de 2023 e 2024, como auxiliar de chefes renomadas no Sabores da Mesa São Paulos e participei de ações promovidas pela escola, auxiliando na cozinha em eventos escolares.",
    ],
  },
  {
    id: 5,
    name: "Pietro Menezes Alves",
    photo: membro5,
    bio: [
      "Sou Pietro Menezes, tenho 18 anos. Sou estudante de gastronomia e comecei minha trajetória no curso M-tec de gastronomia na ETEC Professor Camargo Aranha, onde desenvolvi técnicas de preparo, montagem de pratos, práticas de manipulação e organização na cozinha.",
      "Participei de eventos realizados pela escola, como nos anos de 2024 e 2025, quando pude auxiliar chefs no Mesa São Paulo.",
    ],
  },
];
