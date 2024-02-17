import { useState } from "react";
import { useEffect } from "react";
function Cards() {
  const apiKey = "sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E";

  const cards = [
    { id: 0, character: "Goku", endPoint: "GRSnxyhJnPsaQy9YLn" },
    { id: 1, character: "Vegeta", endPoint: "5Uwh7Ldfm5aYU" },
    { id: 2, character: "Gohan", endPoint: "ki6vcWVCkGscU" },
    { id: 3, character: "Trunks", endPoint: "8bS2vbeZ3hEuk" },
    { id: 4, character: "Piccolo", endPoint: "h9J38OEA8IrAY" },
    { id: 5, character: "Frieza", endPoint: "YX1rsNMnDvjna" },
    { id: 6, character: "Cell", endPoint: "g7QTevVU3gudiKGMpU" },
    { id: 7, character: "Majin Buu", endPoint: "VJeQrlJLcDsxnknlTP" },
    { id: 8, character: "Master Roshi", endPoint: "JILOx1KJggOGI" },
    { id: 9, character: "Broly", endPoint: "vHgVXgU5SfuSr8Apnb" },
    { id: 10, character: "Bulma", endPoint: "9HYIrMabdm7ouk" },
    { id: 11, character: "Krillin", endPoint: "9Jkbi9qi64M1818acD" },
    { id: 12, character: "Android 18", endPoint: "MHDALD2BOcfja" },
    { id: 13, character: "Gotenks", endPoint: "g96lpa8OgH1HG" },
  ];
  const currArray = [];
  const [curr, setCurr] = useState(0);
  const [best, setBest] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showCards, setShowCards] = useState([]);
  shuffleCards(cards);
  useEffect(() => {
    async function fetchData() {
      let randomCards = await Promise.all(
        currArray.map(async (id) => {
          let newUrl = `https://api.giphy.com/v1/gifs/${cards[id].endPoint}?api_key=sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E&rating=g`;
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
    for (let i = 0; i < 8; i++) {
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
      let randomIndex = getRandomInt(cards.length);
      while (selected.includes(randomIndex)) {
        randomIndex = getRandomInt(cards.length);
      }
      currArray[getRandomInt(14)] = randomIndex;
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
