import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./components/Cards";
import Images from "./components/Images";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Images />
      <Cards />
    </>
  );
}

export default App;
