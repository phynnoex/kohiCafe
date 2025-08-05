import Button from "../button";
import "./styles.scss"

type FeatureItems = {
  name: string;
  description: string;
  image: string;
};

type FeatureCardProps = {
    card: FeatureItems;
} 

export default function FeaturedCard({card}:FeatureCardProps) {
    return(
        <div className="featureCard">
            <div className="cardImage"><img src={card.image} alt="" /></div>
            <div className="cardDescription">
                <div className="descriptionTitle">{card.name}</div>
                <div className="descriptionText">{card.description}</div>
                <Button buttonType="card" onClick={() => {}} text="Order Now"/>
            </div>
        </div>
    )
}