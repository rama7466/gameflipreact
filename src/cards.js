import granger from "./assets/images/granger.png";
import julian from "./assets/images/julian.png";
import layla from "./assets/images/layla.png";
import alucard from "./assets/images/alucard.png";
import yin from "./assets/images/yin.png";
import amon from "./assets/images/amon.png";

const cards = [
  { id: 1, name: "granger", image: granger },
  { id: 2, name: "granger", image: granger },
  { id: 3, name: "julian", image: julian },
  { id: 4, name: "julian", image: julian },
  { id: 5, name: "layla", image: layla },
  { id: 6, name: "layla", image: layla },
  { id: 7, name: "alucard", image: alucard },
  { id: 8, name: "alucard", image: alucard },
  { id: 9, name: "yin", image: yin },
  { id: 10, name: "yin", image: yin },
  { id: 11, name: "amon", image: amon },
  { id: 12, name: "amon", image: amon },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
