import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import type { Item } from "../../types/Item";
import FeaturedCard from "../featureCards";
import "./styles.scss";
import { useEffect, useState } from "react";
import { getItemsbyCategories } from "../../feautures/Specials";
import { useModal } from "../../modalContext";
import OrderModal from "../../layout/orderModal";

export default function Carousel() {
  const [cards, setCards] = useState<Item[]>([]);

  const { modalOpen, setModalOpen } = useModal();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const handleItemClick = (item: Item) => {
    console.log("Item clicked:", item);
    setSelectedItem(item);
    setModalOpen(true);
  };

  

  useEffect(() => {
    async function fetchCards() {
      const response = await getItemsbyCategories("EIrOjqRQWVo7NUbRF0pw");
      setCards(response);
    }
    fetchCards();
  }, []);



  const [startIndex, setStartIndex] = useState(0);
  const windowSize = 4;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + windowSize < cards.length;

  const visibleItems = cards.slice(startIndex, startIndex + windowSize);

  const handleLeft = () => {
    if (canGoLeft) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleRight = () => {
    if (canGoRight) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="carousel">
      <button className="navButton" onClick={handleLeft} disabled={!canGoLeft}>
        <FaAngleLeft />
      </button>

      <div className="cardContainer">
        {visibleItems.map((card, index) => (
          <FeaturedCard
            key={index}
            card={card}
            onClick={() => handleItemClick(card)}
          />
        ))}
      </div>

      <button
        className="navButton"
        onClick={handleRight}
        disabled={!canGoRight}
      >
        <FaAngleRight />
      </button>
      {modalOpen && selectedItem && <OrderModal item={selectedItem} />}
    </div>
  );
}
