import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
export default function Gallery({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!category) {
      setImages([]);
      return;
    }

    async function fetchImages() {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${category}&per_page=12&client_id=NOgMdBQZxEoB90QRNYiTFmfmghW3hQdA7SAorcS6Xvc`
      );
      const data = await res.json();
      setImages(
        data.results.map((img) => ({
          url: img.urls.small,
          alt: img.alt_description || "photo",
        }))
      );
    }

    fetchImages();
  }, [category]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-4 py-10">
      {images.map((img, index) => (
        <ImageCard key={index} url={img.url} alt={img.alt} />
      ))}
    </div>
  );
}