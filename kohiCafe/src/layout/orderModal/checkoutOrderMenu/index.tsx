import { useEffect, useState } from "react";
import "./styles.scss";
import PurchaseCard from "../../../components/purchaseCard";
import PaymentReceipt from "./PaymentReceipt";
import PaymentForm from "./PaymentForm";
import americanExpress from "../../../assets/CardChoices/American_Express_(1).svg";
import visa from "../../../assets/CardChoices/Visa_(1).svg";
import masterCard from "../../../assets/CardChoices/Mastercard_(15).svg";

type CartsPaymentProps = {
  subTotalPrice: number;
  deliveryCostPrice: number;
};

export default function CheckoutOrderMenu({
  subTotalPrice,
  deliveryCostPrice,
}: CartsPaymentProps) {
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const cardChoices = [
    { id: 1, name: "MasterCard", img: masterCard },
    { id: 2, name: "Visa", img: visa },
    { id: 3, name: "American Express", img: americanExpress },
  ];
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  useEffect(() => {
    console.log("Selected Card ID in CheckoutOrderMenu:", selectedCardId);
  }, [selectedCardId]);
  return (
    <>
      <div className="order-modal__content-container order-modal__content-container--payment">
        <div className="order-modal__image order-modal__image--display-payment">
          <div className="card-image">
            <PurchaseCard
              name={cardHolderName}
              cardTypeImg= {selectedCardId ? cardChoices[selectedCardId - 1].img : ""}
              date={expiryDate}
              lastFour={cardNumber.slice(-4)}
            />
          </div>
          <PaymentReceipt
            subTotalPrice={subTotalPrice}
            deliveryCostPrice={deliveryCostPrice}
          />
        </div>
        <div className="order-modal__order-description-container order-modal__description-container--payment">
          <PaymentForm
            cardChoices={cardChoices}
            setSelectedChoiceId={setSelectedCardId}
            cardHolderName={cardHolderName}
            setCardHolderName={setCardHolderName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiryDate={expiryDate}
            setExpiryDate={setExpiryDate}
            cvv={cvv}
            setCvv={setCvv}
          />
        </div>
      </div>
    </>
  );
}
