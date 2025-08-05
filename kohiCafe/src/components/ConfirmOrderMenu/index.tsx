import InputCounter from "../InputCounter";
import type { Item } from "../../types/Item";
import { useMemo, useState } from "react";
import useFetchAddons from "../../hooks/useFetchAddons";
import { useCart } from "../../CartContsxt";


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
};

// get the cart items array
// display its contents
// create a quantities state that takes all the quantities of each cart Item
//

export default function ConfirmOrderMenu({
  displayCoffee,
  setCurrentMenu,
  cartItems,
}: ConfirmOrderMenuProps) {
 



  const { removeFromCart, updateItemQuantity } = useCart();

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
              <div className="checkout-card-container">
                <div className="checkout-card">
                  <div className="checkout-card__image">
                    <img src={displayCoffee} alt="" />
                  </div>
                  <div className="checkout-card__description">
                    <div className="checkout-card__top-description">
                      <div className="checkout-card__title">
                        {cartItem.item.item_name}
                      </div>
                      <div className="checkout-card__size">
                        <span>
                          Size :{cartItem.coffeeSize == 0 && " small"}{" "}
                          {cartItem.coffeeSize == 1 && " medium"}{" "}
                          {cartItem.coffeeSize == 2 && " large"}{" "}
                          {cartItem.coffeeSize == 3 && " ext Large"}
                        </span>
                      </div>
                      <div className="checkout-card__addons">
                        <span>Addons: </span>
                        {Object.entries(cartItem.addOnsQuantity).map(
                          ([name, qty]) => (
                            <span>
                              {qty} {name}s{" "}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="checkout-card__bottom-action">
                      <div className="checkout-card__size-container">
                        <InputCounter
                          addOnQuantity={cartItem.quantity}
                          onSelect={(qty: number) =>
                            updateItemQuantity(cartItem.id, qty)
                          }
                        />
                      </div>
                      <div className="checkout-card__remove-container">
                        <button
                          className="checkout-card__remove-button"
                          onClick={() => removeFromCart(cartItem.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>No items in cart</span>
          )}

          <div className="checkout-summary">
            <div className="checkout-summary__card">
              <div className="checkout-summary__card-title">Sub-Total</div>
              <div className="checkout-summary__card-price">
                {subTotal.toFixed(2)}
              </div>
            </div>
            <div className="checkout-summary__card">
              <div className="checkout-summary__card-title">Delivery cost</div>
              <div className="checkout-summary__card-price">
                {deliveryCost.toFixed(2)}
              </div>
            </div>
            <div className="checkout-summary__card">
              <div className="checkout-summary__card-title">HST/GST</div>
              <div className="checkout-summary__card-price">
                {(subTotal * 0.13).toFixed(2)}
              </div>
            </div>
            <div className="checkout-summary__card checkout-summary__card--total">
              <div className="checkout-summary__card-title">Total</div>
              <div className="checkout-summary__card-price">
                {(subTotal + deliveryCost + subTotal * 0.13).toFixed(2)}
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
