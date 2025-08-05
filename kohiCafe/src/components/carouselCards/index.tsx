import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image1 from "../../assets/shop-image.png";
import FeaturedCard from "../featureCards";
import "./styles.scss";
import { useState } from "react";

type FeatureItem = {
  name: string;
  description: string;
  image: string;
};

export default function Carousel() {
  const cards: FeatureItem[] = [
    {
      name: "Mitsushima kohi Blend",
      description: "Mornings just got sweeter! Try a deliciously sweet Cinnamon",
      image: image1,
    },
    {
      name: "Mitsushima kohi Blend",
      description: "Mornings just got sweeter! Try a deliciously sweet Cinnamon",
      image: image1,
    },
    {
      name: "Mitsushima kohi Blende3",
      description: "Mornings just got sweeter! Try a deliciously sweet Cinnamon",
      image: image1,
    },
    {
      name: "Mitsushima kohi Blend23",
      description: "Mornings just got sweeter! Try a deliciously sweet Cinnamon",
      image: image1,
    },
    {
      name: "Mitsushima kohi Blend2",
      description: "Mornings just got sweeter! Try a deliciously sweet Cinnamon",
      image: image1,
    },
    {
      name: "Mitsushima kohi Blend3",
      description: "Mornings just got sweeter! Try a deliciously sweet Cinnamon",
      image: image1,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const windowSize = 4;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + windowSize < cards.length;

  const visibleItems = cards.slice(startIndex, startIndex + windowSize);

  const handleLeft = () => {
    if (canGoLeft) {
      setStartIndex(prev => prev - 1);
    }
  };

  const handleRight = () => {
    if (canGoRight) {
      setStartIndex(prev => prev + 1);
    }
  };

  return (
    <div className="carousel">
      <button className="navButton" onClick={handleLeft} disabled={!canGoLeft}>
        <FaAngleLeft />
      </button>

      <div className="cardContainer">
        {visibleItems.map((card, index) => (
          <FeaturedCard key={index} card={card} />
        ))}
      </div>

      <button className="navButton" onClick={handleRight} disabled={!canGoRight}>
        <FaAngleRight />
      </button>
    </div>
  );
}
