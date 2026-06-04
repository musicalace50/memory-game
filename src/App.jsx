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
  return (
    <div className="app">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cardValues.map(card => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App