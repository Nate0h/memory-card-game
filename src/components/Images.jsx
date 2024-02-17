import { useEffect } from "react";
import { useState } from "react";

function Images() {
  /* const apiKey = "sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E";
  let endpointID = "adssad";*/
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlList, setImageUrlList] = useState([]);
  let url = `https://api.giphy.com/v1/gifs/bLy8cwoobMGx1uDHkO?api_key=sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E&rating=g`;
  const currArray = [];

  const images = [
    { id: 0, character: "Goku", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 1, character: "Vegeta", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 2, character: "Gohan", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 3, character: "Trunks", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 4, character: "Piccolo", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 5, character: "Krillin", endPoint: "bLy8cwoobMGx1uDHkO" },
  ];

  shuffleCards(images);
  alert(currArray.length);

  useEffect(() => {
    async function fetchData() {
      let randomUrls = await Promise.all(
        currArray.map(async (id) => {
          let newUrl = `https://api.giphy.com/v1/gifs/${images[id].endPoint}?api_key=sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E&rating=g`;
          const response = await fetch(newUrl);
          const json = await response.json();
          return {
            url: json.data.images.original.url,
            name: images[id].character,
            id: images[id].id,
          };
        })
      );

      setImageUrlList(randomUrls);
    }
    fetchData();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function shuffleCards(images) {
    for (let i = 0; i < 4; i++) {
      let randomIndex = getRandomInt(images.length);
      while (currArray.includes(randomIndex)) {
        randomIndex = getRandomInt(images.length);
      }
      currArray.push(randomIndex);
    }
  }
  return (
    <>
      {imageUrlList.map((image) => {
        return (
          <div key={image.id}>
            <div>{image.name}</div>
            <img src={image.url} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default Images;
