import type { Item } from "../../types/Item";
import "./styles.scss";

type MenuItemProps = Pick<Item, "item_name" | "item_image"> & {
  onClick: () => void;
};

export default function MenuItem({ item_name, item_image, onClick }: MenuItemProps) {
  return (
    <div className="menu-item" onClick={onClick}>
      <div className="menu-item__image-Container">
        <img className="menu-item__image" src={item_image} alt="image" />
      </div>
      <div className="menu-item__title">{item_name}</div>
    </div>
  );
}
