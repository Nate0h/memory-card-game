import { useState } from "react";

function Cards() {
  const cards = [
    { id: 0, character: "Goku" },
    { id: 1, character: "Vegeta" },
    { id: 2, character: "Gohan" },
    { id: 3, character: "Trunks" },
    { id: 4, character: "Piccolo" },
    { id: 5, character: "Krillin" },
  ];
  const [curr, setCurr] = useState(0);
  const [selected, setSelected] = useState([]);
  let currArray = [];

  if (curr == cards.length) {
    alert("You win");
    setCurr(0);
    setSelected([]);
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getXRandom(cards) {
    for (let i = 0; i < 4; i++) {
      let randomIndex = getRandomInt(cards.length);
      while (currArray.includes(randomIndex)) {
        randomIndex = getRandomInt(cards.length);
      }
      currArray.push(randomIndex);
    }

    if (
      curr != cards.length &&
      !currArray.some((item) => !selected.includes(item))
    ) {
      alert("s");
      let randomIndex = getRandomInt(cards.length);
      while (selected.includes(randomIndex)) {
        randomIndex = getRandomInt(cards.length);
      }
      currArray[getRandomInt(4)] = cards[randomIndex].id;
    }
    return (
      <>
        {currArray.map((id) => {
          return (
            <div onClick={() => handleClick(cards[id])} key={id}>
              {id}
              {cards[id].character}
            </div>
          );
        })}
      </>
    );
  }

  function handleClick(card) {
    if (selected.includes(card.id)) {
      setCurr(0);
      setSelected([]);
    } else {
      setSelected([...selected, card.id]);
      setCurr(curr + 1);
    }
  }
  return (
    <div>
      <div>{curr}</div>
      {getXRandom(cards)}
      <div></div>

      {selected.map((select) => {
        return (
          <div key={cards[select].id}>
            <div>{cards[select].character}</div>
            <div>{cards[select].id}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
