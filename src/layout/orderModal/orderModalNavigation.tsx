import {
  FaBasketShopping,
  FaCartShopping,
} from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

type navigationProps = {
    currentMenu: number;
}

export default function OrderModalNavigation({ currentMenu }: navigationProps) {
    return(
        <div className="order-modal__navigation">
        <div
          className={`order-modal__items ${
            currentMenu === 1 ? "order-modal__items--active" : null
          } `}
        >
          <FaBasketShopping />
        </div>
        <div
          className={`order-modal__items ${
            currentMenu === 2 ? "order-modal__items--active" : null
          } `}
        >
          <FaCartShopping />
        </div>
        <div
          className={`order-modal__items ${
            currentMenu === 3 ? "order-modal__items--active" : null
          } `}
        >
          <FaCheck />
        </div>
      </div>
    )
}