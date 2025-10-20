import Button from "../button";
import "./styles.scss";
import type { Item } from "../../types/Item";

type FeatureCardProps = {
  card: Item;
    onClick: () => void;
};

export default function FeaturedCard({ card, onClick }: FeatureCardProps) {
 
  return (
    <div className="featureCard">
      <div className="cardImage">
        <img src={card.item_image} alt="" />
      </div>
      <div className="cardDescription">
        <div className="descriptionTitle">{card.item_name}</div>
        <div className="descriptionText">{card.item_description}</div>
        <Button
          buttonType="card"
          onClick={onClick}
          text="Order Now"
        />
      </div>
    </div>
  );
}
