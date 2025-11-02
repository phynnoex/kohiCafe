import { useState } from "react";
import type { Item } from "../../types/Item";
import MenuItem from "../menuItem";
import "./styles.scss";
import OrderModal from "../../layout/orderModal";
import { useModal } from "../../modalContext";

type DisplayMenu = {
  menuTitle: string;
  itemObjects: Item[];
};

export default function DisplayMenu({ menuTitle, itemObjects }: DisplayMenu) {
  const { modalOpen, setModalOpen } = useModal();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const handleItemClick = (item: Item) => {
    console.log("Item clicked:", item);
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="display-menu">
      <h1 className="display-menu__title">{menuTitle}</h1>
      <div className="display-menu__items-container">
        {itemObjects.map((item, index) => (
          <>
            <MenuItem
              onClick={() => handleItemClick(item)}
              key={index}
              item_name={item.item_name}
              item_image={item.item_image}
            />
            
          </>
        ))}
        {modalOpen && selectedItem && <OrderModal item={selectedItem} />}
      </div>
      <hr />
    </div>
  );
}
