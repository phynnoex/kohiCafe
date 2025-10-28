import type { Item } from "../../../types/Item";
import InputCounter from "../../../components/InputCounter";
import { useCart } from "../../../CartContsxt";


type CartItems = {
  id: string;
  item: Item;
  coffeeSize: number | null;
  addOnsQuantity: Record<string, number>;
  quantity: number;
};

type checkOutCardProps = {
    displayCoffee: string;
    cartItem: CartItems;
}

export default function CheckoutCard({ displayCoffee, cartItem}: checkOutCardProps) {

      const { removeFromCart, updateItemQuantity } = useCart();
  return (
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
                <b>Size :</b>
                {cartItem.coffeeSize == 1 && " medium"}{" "}
                {cartItem.coffeeSize == 2 && " large"}{" "}
                {cartItem.coffeeSize == 3 && " ext Large"}
              </span>
            </div>
            <div className="checkout-card__addons">
              <b>Addons: </b>
              {Object.entries(cartItem.addOnsQuantity).map(([name, qty]) => (
                <span>
                  {qty} {name}s{" "}
                </span>
              ))}
            </div>
          </div>
          <div className="checkout-card__bottom-action">
            <div className="checkout-card__size-container">
              <InputCounter
                addOnQuantity={cartItem.quantity}
                onSelect={(qty: number) => updateItemQuantity(cartItem.id, qty)}
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
  );
}
