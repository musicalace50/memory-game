import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GameHeader } from "./components/gameHeader"

const cardValues = [
  "🐳",
  "🦚",
  "🐢",
  "🐈",
  "🐩",
  "🦔",
  "🐠",
  "🐇",
  "🐳",
  "🦚",
  "🐢",
  "🐈",
  "🐩",
  "🦔",
  "🐠",
  "🐇",
];


function App() {
  const [cards, setCards] = useState([]);

const initGame = () => {
  //Shuffle cards

  setCards(cardValues.map((value, index) => (
    {
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }
  )));
};

  useEffect(() => {
    initGame();
  }, []);
  
  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return {...c, isFlipped: true};
      } else {
        return c;
      }
    });

    setCards(newCards);
  };

  return (
    <div className="app">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cards.map(card => (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
}

export default App