import { useState } from "react";
import { useEffect } from "react";
function Cards() {
  const apiKey = "sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E";

  const cards = [
    { id: 0, character: "Goku", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 1, character: "Vegeta", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 2, character: "Gohan", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 3, character: "Trunks", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 4, character: "Piccolo", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 5, character: "Krillin", endPoint: "bLy8cwoobMGx1uDHkO" },
  ];
  const currArray = [];
  const [curr, setCurr] = useState(0);
  const [best, setBest] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    shuffleCards(cards);
    async function fetchData() {
      let randomCards = await Promise.all(
        currArray.map(async (id) => {
          let newUrl = `https://api.giphy.com/v1/gifs/${cards[id].endPoint}?api_key=${apiKey}&rating=g`;
          const response = await fetch(newUrl);
          const json = await response.json();
          return {
            url: json.data.images.original.url,
            name: cards[id].character,
            id: cards[id].id,
          };
        })
      );

      setShowCards(randomCards);
    }
    fetchData();
  }, [curr]);

  if (curr == cards.length) {
    alert("You win");
    setBest(0);
    setCurr(0);
    setSelected([]);
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function shuffleCards(cards) {
    for (let i = 0; i < 4; i++) {
      let randomIndex = getRandomInt(cards.length);
      while (currArray.includes(randomIndex)) {
        randomIndex = getRandomInt(cards.length);
      }
      currArray.push(randomIndex);
    }

    if (
      curr != cards.length &&
      !currArray.some((item) => !selected.includes(item.id))
    ) {
      alert("s");
      let randomIndex = getRandomInt(cards.length);
      while (selected.includes(randomIndex)) {
        randomIndex = getRandomInt(cards.length);
      }
      currArray[getRandomInt(4)] = randomIndex;
    }
  }

  function handleClick(card) {
    if (selected.includes(card.id)) {
      setCurr(0);
      setSelected([]);
    } else {
      setSelected([...selected, card.id]);
      setCurr((curr) => curr + 1);
      if (curr >= best) {
        setBest((curr) => curr + 1);
      }
    }
  }

  return (
    <div>
      <div>Best Score: {best}</div>
      <div>Current Score: {curr}</div>
      {
        <>
          {showCards.map((card) => {
            return (
              <div key={card.id} onClick={() => handleClick(card)}>
                <div>{card.name}</div>

                <img src={card.url} alt="" />
              </div>
            );
          })}
        </>
      }
    </div>
  );
}

export default Cards;
