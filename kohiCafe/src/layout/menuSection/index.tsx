import Aside from "../../components/Aside";
import DisplayMenu from "../../components/displayMenu";
import type { MenuCategory } from "../../types/Item";
import type { Item } from "../../types/Item";
import { useEffect, useState } from "react";
import "./styles.scss";
import { getCategories, getItemsbyCategories } from "../../feautures/Specials";

export default function MenuSection() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
      console.log("Fetched Categories:", fetchedCategories);
      const fetchedItems = await getItemsbyCategories(
        fetchedCategories[currentIndex]?.id
      );
      setItems(fetchedItems);
      console.log("Fetched Items:", fetchedItems);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (categories.length > 0) {
        const fetchedItems = await getItemsbyCategories(
          categories[currentIndex]?.id
        );
        setItems(fetchedItems);
        console.log("Fetched Items:", fetchedItems);
      }
    })();
  }, [currentIndex]);

  const handClickCategory = (index: number) => {
    console.log(index);
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="menuSection">
        <Aside
          categories={categories}
          handleClick={handClickCategory}
          activeIndex={currentIndex}
        />
        <DisplayMenu
          menuTitle={categories[currentIndex]?.category_title}
          itemObjects={items}
        />
      </div>
    </>
  );
}
