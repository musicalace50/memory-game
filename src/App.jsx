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
  const [flippedCards, setFlippedCards] = useState([]);

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

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // Check for match
    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];
      if (firstCard.value === card.value) {
        alert("match");
      } else {
        // Flip the cards back

        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
          if (newFlippedCards.includes(c.id) || c.id === card.id) {
            return {...c, isFlipped: false};
          } else {
            return c;
          }
        });

        setCards(flippedBackCards);

        }, 1000);
      };//Ends firstCard.value if/else 
    };// Ends flippedCards.length if
  }; //Ends handleCardClick

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
} // Ends App

export default App