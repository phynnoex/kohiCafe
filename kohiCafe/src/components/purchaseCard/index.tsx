import "./styles.scss";
import star from "../../assets/concealed-text-star.svg";
import metalChip from "../../assets/metal-chip.svg"

type PurchaseCardProps = {
  name: string;
  cardTypeImg: string;
  date: string;
  lastFour: string;
};

export default function PurchaseCard({
  name,
  cardTypeImg,
  date,
  lastFour,
}: PurchaseCardProps) {
  return (
    <div className="purchase-card">
      <div className="purchase-card__metal-chip"><img src= {metalChip} alt="" /></div>
      <div className="purchase-card__name-number-container">
        <div className="card-name">{name}</div>
        <div className="card-number">
          {" "}
          <span className="stars-container">
            {Array(4).fill("").map(() => {
                return <img src={star} alt="*" />;
            })}
          </span>{" "}
          <span className="last-four">{lastFour}</span>
        </div>
      </div>
      <div className="purchase-card__date-cardType-container">
        <div className="date">{date}</div>
        <div className="card-type">
          <img src={cardTypeImg} alt="" />
        </div>
      </div>
    </div>
  );
}
