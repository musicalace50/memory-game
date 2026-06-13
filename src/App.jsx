import { Card } from "./components/Card";
import { GameHeader } from "./components/gameHeader"
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

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
  const {
    cards, 
    score, 
    moves, 
    isGameComplete, 
    initGame, 
    handleCardClick
  } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initGame}/>

      {isGameComplete && <WinMessage moves={moves}/>}

      <div className="cards-grid">
        {cards.map(card => (
          <Card card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  );
} // Ends App

export default App