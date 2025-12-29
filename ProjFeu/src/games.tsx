// src/data/games.ts

import zozoLogo from "../assets/ss_logo_br.png";
import zozo1 from "../assets/ss1.jpg";
import zozo2 from "../assets/ss2.jpg";
import zozo3 from "../assets/ss3.jpg";
import zozo4 from "../assets/ss4.jpg";

import medoCapsula from "../assets/CAPSULA-PRINCIPAL-PTBR.png";

export interface Game {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  videos: string[];
  storeLinks: {
    name: string;
    url: string;
  }[];
}

export const games: Game[] = [
  {
    id: 1,
    name: "O Show do Zozo",
    shortDescription:
      "Um jogo de terror psicológico ambientado em um circo abandonado.",

    fullDescription:
      "O Show do Zozo é um jogo de terror psicológico que explora o medo através de narrativas sombrias, cenários perturbadores e desafios mentais. O jogador precisa desvendar mistérios enquanto enfrenta seus próprios medos.",

    images: [
      zozoLogo,
      zozo1,
      zozo2,
      zozo3,
      zozo4,
    ],

    videos: [
      "https://www.youtube.com/embed/T6hQniXppT0",
    ],

    storeLinks: [
      {
        name: "Steam",
        url: "https://store.steampowered.com/app/3226180/O_Show_de_Zozo/",
      },
    ],
  },

  {
    id: 2,
    name: "O Medo Desconhecido",
    shortDescription:
      "Uma experiência imersiva de terror e suspense.",

    fullDescription:
      "Um jogo de terror focado em uma história de mistério. Além de um sistema experimental onde os eventos do jogo são controlados por uma IA, tornando cada jogatina única. " +
      "O jogo faz parte de uma série autoral chamada O Medo Desconhecido, composta por cinco jogos interligados. " +
      "Neste primeiro jogo, você assume o papel de alguém que não lembra nem mesmo do próprio nome e precisa concluir uma tarefa imposta por um cientista misterioso.",

    images: [
      medoCapsula,
    ],

    videos: [
      "https://www.youtube.com/embed/Shjnu3aZebQ",
    ],

    storeLinks: [
      {
        name: "Steam",
        url: "https://store.steampowered.com/app/2619300/O_Medo_Desconhecido/?l=brazilian",
      },
    ],
  },
];
