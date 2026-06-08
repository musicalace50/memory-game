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
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setLocked] = useState(false);

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
  setMoves(0);
  setScore(0);
  setMatchedCards([]);
  setFlippedCards([]);
  setLocked(false);
};

  useEffect(() => {
    initGame();
  }, []);
  
  const handleCardClick = (card) => {
    if (card.isFlipped || 
      card.isMatched || 
      isLocked || 
      flippedCards.length === 2) {
      return ;
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
      setLocked(true);
      const firstCard = cards[flippedCards[0]];
      if (firstCard.value === card.value) {
        setScore((prev) => prev + 1); 
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);

          setCards((prev) => 
            prev.map((c) => {
            if (c.id === card.id || c.id === firstCard.id) {
              return {...c, isMatched: true};
            } else {
              return c;
            }
          })
        );
          setFlippedCards([]);
          setLocked(false);
        }, 1000);
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
          setLocked(false);
          setFlippedCards([]);
        }, 500);
      };//Ends firstCard.value if/else 
      
      setMoves((prev) => prev + 1);  
    };// Ends flippedCards.length if
  }; //Ends handleCardClick

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initGame}/>

      <div className="cards-grid">
        {cards.map(card => (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
} // Ends App

export default App