import "./styles.scss";
import displayCoffee from "../../assets/displayCoffee.png";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

import CartsMenu from "./CartsMenu";
import type { Item } from "../../types/Item";
import ConfirmOrderMenu from "./ConfirmOrderMenu";
import { useModal } from "../../modalContext";
import useFetchAddons from "../../hooks/useFetchAddons";
import OrderModalNavigation from "./orderModalNavigation";
import { useCart } from "../../CartContsxt";
import CheckoutOrderMenu from "./checkoutOrderMenu";
import { createPortal } from "react-dom";

export default function OrderModal({ item }: { item: Item }) {
  const { setModalOpen } = useModal();

  const [coffeeSize, setCoffeeSize] = useState<number | null>(null);
  const [addOnsQuantity, setAddOnQuantities] = useState<Record<string, number>>(
    {}
  );
  const [currentMenu, setCurrentMenu] = useState<1 | 2 | 3>(1);
  const [checkOutOrderSize] = useState<number>(1);
  const [subTotalPrice, setSubTotalPrice] = useState<number>(0);
  const [deliveryCostPrice, setDeliveryCostPrice] = useState<number>(0);

  const { cart, addToCart } = useCart();

  // 🛡 Guard: if no item, render nothing
  if (!item) {
    return null;
  }

  const fetchedAddons = useFetchAddons(item.add_ons || []);

  useEffect(() => {
    if (fetchedAddons.length > 0) {
      const initialQuantities: Record<string, number> = {};
      fetchedAddons.forEach((addOn) => {
        initialQuantities[addOn.name] = 0;
      });
      setAddOnQuantities(initialQuantities);
    }
  }, [fetchedAddons]);

  function updateHandler(name: string) {
    return function (qty: number) {
      setAddOnQuantities((prev) => ({ ...prev, [name]: qty }));
    };
  }

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(item, checkOutOrderSize, coffeeSize, addOnsQuantity);
    console.log(cart);
    setCurrentMenu(2);
  };

  return createPortal(
    <div className="order-modal">
      <div className="order-modal__cancel">
        <div
          className="order-modal__cancel-icon"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <FaXmark className="icon icon-desktop" />
        </div>
      </div>
      <OrderModalNavigation currentMenu={currentMenu} />
      <div className="order-modal__content">
        {currentMenu === 1 && (
          <CartsMenu
            item={item}
            displayCoffee={displayCoffee}
            coffeeSize={coffeeSize}
            handleSubmit={handleConfirmOrder}
            setCoffeeSize={setCoffeeSize}
            addOns={fetchedAddons}
            addOnsQuantity={addOnsQuantity}
            updateHandler={updateHandler}
          />
        )}
        {currentMenu === 2 && (
          <ConfirmOrderMenu
            displayCoffee={displayCoffee}
            setCurrentMenu={setCurrentMenu}
            cartItems={cart?.cartItems ?? []}
            setSubTotalPrice={setSubTotalPrice}
            setDeliveryCostPrice={setDeliveryCostPrice}
          />
        )}
        {currentMenu === 3 && (
          <CheckoutOrderMenu
            subTotalPrice={subTotalPrice}
            deliveryCostPrice={deliveryCostPrice}
            // item={item}
            // displayCoffee={displayCoffee}
            // coffeeSize={coffeeSize}
            // handleSubmit={handleConfirmOrder}
            // setCoffeeSize={setCoffeeSize}
            // addOns={fetchedAddons}
            // addOnsQuantity={addOnsQuantity}
            // updateHandler={updateHandler}
          />
        )}
      </div>
    </div>,
    document.body
  );
}
