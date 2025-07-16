import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGift(category).then((gift) => setImages(gift), setIsLoading(false));
  }, []);

  return { images, isLoading };
};
