import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./components/Cards";
import dbz from "./assets/dbz.png";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  let startGame;
  if (start) {
    startGame = (
      <>
        <Cards />
      </>
    );
  }

  return (
    <>
      {!start && (
        <div>
          <img src={dbz} style={{ width: "600px", height: "auto" }} alt="" />
        </div>
      )}
      {!start && (
        <div>
          <div className="introText">
            This is the DBZ Memory Card Game. Let's see how much are you a true
            fan of the legendary series by putting your memory skills to the
            test! Every time you click on a card that you haven't clicked before
            you get one point, if you click on a card you already clicked you
            have to start from the beginning. Are you ready?
          </div>
          <button onClick={() => setStart(!start)}>Start Game</button>
        </div>
      )}
      {startGame}
    </>
  );
}

export default App;
