import React, { useCallback, useState } from "react";
import TouchCarousel from "react-touch-drag-slider";

export function Carrousel() {
    const images = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150/0000FF',
        'https://via.placeholder.com/150/FF0000',
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return (
    <TouchCarousel
      onSlideComplete={handleSlideChange}
      onSlideStart={() => console.log("slide start")}
      onSlideEnd={() => console.log("slide end")}
      enableMouseEvents
    >
      {images.map((image, index) => (
        <img key={index} src={`/images/${image}`} alt="" />
      ))}
    </TouchCarousel>
  );
}

export default Carrousel;





