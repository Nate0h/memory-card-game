import { useEffect } from "react";
import { useState } from "react";

function Images() {
  /* const apiKey = "sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E";
  let endpointID = "adssad";*/
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlList, setImageUrlList] = useState([]);
  let url = `https://api.giphy.com/v1/gifs/bLy8cwoobMGx1uDHkO?api_key=sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E&rating=g`;
  const images = [
    { id: 0, character: "Goku", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 1, character: "Vegeta", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 2, character: "Gohan", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 3, character: "Trunks", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 4, character: "Piccolo", endPoint: "bLy8cwoobMGx1uDHkO" },
    { id: 5, character: "Krillin", endPoint: "bLy8cwoobMGx1uDHkO" },
  ];

  useEffect(() => {
    async function fetchData() {
      let randomUrls = await Promise.all(
        images.map(async (image) => {
          let newUrl = `https://api.giphy.com/v1/gifs/${image.endPoint}?api_key=sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E&rating=g`;
          const response = await fetch(newUrl);
          const json = await response.json();
          return json.data.images.original.url;
        })
      );

      setImageUrlList(randomUrls);
    }
    fetchData();
  }, []);
  return (
    <>
      <img src={imageUrlList[5]} alt="" />
    </>
  );
}

export default Images;
