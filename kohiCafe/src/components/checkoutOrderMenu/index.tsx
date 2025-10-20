import { useEffect } from "react";
import type { AddOn, Item } from "../../types/Item";
import AddOnDisplay from "../addOnDisplay";
import AddOnWrapper from "../AddOnWrapper";
import SizeDisplay from "../sizeDisplay";
import "./styles.scss";
import PurchaseCard from "../purchaseCard";

type CartsPaymentProps = {
    // item: Item
    // displayCoffee: string;
    // coffeeSize: number | null;
    // handleSubmit: (e: React.FormEvent) => void;
    // setCoffeeSize: React.Dispatch<React.SetStateAction<number | null>>;
    // addOns: AddOn[];
    // addOnsQuantity: Record<string, number>;
    // updateHandler: (name: string) => (qty: number) => void;
}

export default function CheckoutOrderMenu({
    // item,
    // displayCoffee,
    // coffeeSize,
    // handleSubmit,
    // setCoffeeSize,
    // addOns,
    // addOnsQuantity,
    // updateHandler
}: CartsPaymentProps) {
    return (
        <>
            <div className="order-modal__content-container">
                <div className="order-modal__image order-modal__image--display-payment">
                    <div className="card-image"><PurchaseCard name="John Doe" cardType="Visa" date="12/34" lastFour="1234" /></div>
                    <div className="payment-receipt-container">
                        <div className="payment-receipt-container__payment-totals">
                            <div className="payment-receipt-container__payment-subtotal sub__flex"><span>Sub Total</span><span>$5.00</span></div>
                            <div className="payment-receipt-container__payment-tax sub__flex"><span>Tax</span><span>$0.50</span></div>
                            <div className="payment-receipt-container__payment-total sub__flex"><span>Total</span><span>$5.50</span></div>
                        </div>
                        <div className="payment-receipt-container__payment-final-total"></div>
                    </div>
                </div>
                <div className="order-modal__order-description-container order-modal__description-container--payment">
                    hi
                </div>
            </div>
        </>
    );
}