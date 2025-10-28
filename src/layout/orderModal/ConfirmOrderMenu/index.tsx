import type { Item } from "../../../types/Item";
import { useMemo } from "react";
import useFetchAddons from "../../../hooks/useFetchAddons";

import CheckoutCard from "./checkoutCard";

type CartItems = {
  id: string;
  item: Item;
  coffeeSize: number | null;
  addOnsQuantity: Record<string, number>;
  quantity: number;
};

type ConfirmOrderMenuProps = {
  displayCoffee: string;
  setCurrentMenu: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  cartItems: CartItems[];
  setSubTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setDeliveryCostPrice: React.Dispatch<React.SetStateAction<number>>;
};

// get the cart items array
// display its contents
// create a quantities state that takes all the quantities of each cart Item
//

export default function ConfirmOrderMenu({
  displayCoffee,
  setCurrentMenu,
  cartItems,
  setSubTotalPrice,
  setDeliveryCostPrice,
}: ConfirmOrderMenuProps) {
  const addOnCategories = useMemo(
    () => cartItems.map((i) => i.item.add_ons).flat(),
    [cartItems]
  );

 

  const allAddOns = useFetchAddons(addOnCategories);

  const addOnsMap = new Map(allAddOns.map((addOn) => [addOn.name, addOn]));

  const addOnsCost = cartItems.reduce((acc, item) => {
    const itemAddOnsTotal = Object.entries(item.addOnsQuantity).reduce(
      (sum, [name, qty]) => {
        const addOn = addOnsMap.get(name);
        return sum + (addOn ? addOn.price * qty : 0);
      },
      0
    );
    acc += itemAddOnsTotal;
    return acc;
  }, 0);

  const { subTotal, deliveryCost } = cartItems.reduce(
    (acc, item) => {
      const itemTotal =
        item.quantity * item.item.item_price + item.quantity * addOnsCost;
      acc.subTotal += itemTotal;
      acc.deliveryCost += 5.04;
      return acc;
    },
    { subTotal: 0, deliveryCost: 0 }
  );

  setSubTotalPrice(subTotal);
  setDeliveryCostPrice(deliveryCost);

  return (
    <>
      <div className="order-modal__content-container">
        <div className="order-modal__image order-modal__image--checkout">
          <h1>Good ?</h1>
          <img src={displayCoffee} alt="" />
        </div>
        <div className="order-modal__order-description-container order-modal__description-container--checkout">
          <h1>Confirm Order</h1>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <CheckoutCard
                key={cartItem.id}
                displayCoffee={displayCoffee}
                cartItem={cartItem}
              />
            ))
          ) : (
            <span>No items in cart</span>
          )}

          <div className="checkout-summary">
            <div className="checkout-summary__card">
              <div className="checkout-summary__card-title">Sub-Total</div>
              <div className="checkout-summary__card-price">
                ${subTotal.toFixed(2)}
              </div>
            </div>
            <div className="checkout-summary__card">
              <div className="checkout-summary__card-title">Delivery cost</div>
              <div className="checkout-summary__card-price">
                ${deliveryCost.toFixed(2)}
              </div>
            </div>
            <div className="checkout-summary__card">
              <div className="checkout-summary__card-title">HST/GST</div>
              <div className="checkout-summary__card-price">
                ${(subTotal * 0.13).toFixed(2)}
              </div>
            </div>
            <div className="checkout-summary__card checkout-summary__card--total">
              <div className="checkout-summary__card-title">Total</div>
              <div className="checkout-summary__card-price">
                ${(subTotal + deliveryCost + subTotal * 0.13).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="checkout-button-container">
            <button
              className="checkout-button-container__back"
              onClick={() => {
                setCurrentMenu(1);
              }}
            >
              back
            </button>
            <button
              className="checkout-button-container__next"
              onClick={() => {
                setCurrentMenu(3);
              }}
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
