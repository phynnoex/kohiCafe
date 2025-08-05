import { useEffect } from "react";
import type { AddOn, Item } from "../../types/Item";
import AddOnDisplay from "../addOnDisplay";
import AddOnWrapper from "../AddOnWrapper";
import SizeDisplay from "../sizeDisplay";
import "./styles.scss";

type CartsMenuProps = {
    item: Item
    displayCoffee: string;
    coffeeSize: number | null;
    handleSubmit: (e: React.FormEvent) => void;
    setCoffeeSize: React.Dispatch<React.SetStateAction<number | null>>;
    addOns: AddOn[];
    addOnsQuantity: Record<string, number>;
    updateHandler: (name: string) => (qty: number) => void;
}

export default function CartsMenu({
    item,
  displayCoffee,
  coffeeSize,
  handleSubmit,
  setCoffeeSize,
  addOns,
  addOnsQuantity,
  updateHandler,
}: CartsMenuProps) {

  useEffect(() => {
    console.log("Item-in carts maenu:", item);
  }, [item]);
  return (
          <>
            <div className="order-modal__content-container">
              <div className="order-modal__image order-modal__image--display">
                <img src={displayCoffee} alt="" />
              </div>
              <div className="order-modal__order-description-container order-modal__description-container--checkout">
                <div className="order-modal__top-description">
                  <div className="order-modal__order-title">
                    <h2>{item.item_name}</h2>
                  </div>
                  <p className="order-modal__calories">110 calories</p>
                  <div className="order-modal__order-description">
                    {item.item_description}
                  </div>
                </div>
                <div className="order-modal__order-options">
                  <form onSubmit={handleSubmit}>
                    <AddOnWrapper title="size options">
                      <SizeDisplay
                        onSelect={setCoffeeSize}
                        selectedIndex={coffeeSize}
                      />
                    </AddOnWrapper>
                    <AddOnWrapper title="what's included">
                      {addOns.map(({ name, }) => (
                        <AddOnDisplay
                          title={name}
                          name={name}
                          onSelect={updateHandler(name)}
                          addOnQuantity={addOnsQuantity[name]}
                        />
                      ))}
                    </AddOnWrapper>

                    <button className="order-modal__confirm-button" disabled={coffeeSize === null}>Confirm your order</button>
                  </form>
                </div>
              </div>
            </div>
          </>
        
  );
}