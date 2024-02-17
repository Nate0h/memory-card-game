import { useEffect } from "react";
import { useState } from "react";

function Images() {
  /* const apiKey = "sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E";
  let endpointID = "adssad";*/
  const [imageUrl, setImageUrl] = useState("");
  let url = `https://api.giphy.com/v1/gifs/bLy8cwoobMGx1uDHkO?api_key=sqn6kfwMf3k9Lc9yoWZBsHkh8VHHDQ9E&rating=g`;
  const images = [
    { id: 0, character: "Goku" },
    { id: 1, character: "Vegeta" },
    { id: 2, character: "Gohan" },
    { id: 3, character: "Trunks" },
    { id: 4, character: "Piccolo" },
    { id: 5, character: "Krillin" },
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setImageUrl(json.data.images.original.url);
    }
    fetchData();
  }, []);
  return (
    <>
      <img src={imageUrl} alt="" />
    </>
  );
}

export default Images;
