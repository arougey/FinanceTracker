import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const apiKey = "9D9kCWPorZaQAxghQMHXS3K8Vjd12vB5vj8CqOtm9ug";
    const query = "Boston";
    const apiUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  if (!imageData) {
    return null; // You can render a loading indicator here if you want
  }

  return (
    <img
      src={imageData.urls.regular}
      alt={imageData.alt_description}
      width="300"
      height="250"
    />
  );
};

export default RandomImage;
