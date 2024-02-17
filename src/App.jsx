import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const difficulty = useState(false);
  const [start, setStart] = useState(false);
  let startGame;
  if (start) {
    startGame = (
      <>
        <button>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
        <Cards />
      </>
    );
  }

  return (
    <>
      {!start && (
        <div>
          <div>
            This is the DBZ Memory Card Game. Let's see how much are you a true
            fan of the legendary series by putting your memory skills to the
            test
          </div>
          <button onClick={() => setStart(!start)}>Start Game</button>
        </div>
      )}
      {startGame}
    </>
  );
}

export default App;
