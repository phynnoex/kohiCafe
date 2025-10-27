import { useState } from "react";
import "./styles.scss";
import PurchaseCard from "../../../components/purchaseCard";
import PaymentReceipt from "./PaymentReceipt";
import PaymentForm from "./PaymentForm";

type CartsPaymentProps = {
    subTotalPrice: number;
    deliveryCostPrice: number;
};

export default function CheckoutOrderMenu({
    subTotalPrice,
    deliveryCostPrice
}: CartsPaymentProps) {
    const [cardHolderName, setCardHolderName] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");

  return (
    <>
      <div className="order-modal__content-container order-modal__content-container--payment">
        <div className="order-modal__image order-modal__image--display-payment">
          <div className="card-image">
            <PurchaseCard
              name={cardHolderName}
              cardType="Visa"
              date={expiryDate}
              lastFour = {cardNumber.slice(-4)}
            />
          </div>
          <PaymentReceipt subTotalPrice={subTotalPrice} deliveryCostPrice={deliveryCostPrice} />
        </div>
        <div className="order-modal__order-description-container order-modal__description-container--payment">
         <PaymentForm
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
