import { useEffect, useState } from "react";
import DisplayMenu from "../../components/displayMenu";
import type { MenuCategory } from "../../types/Item";
import type { Item } from "../../types/Item";
import { getItemsbyCategories } from "../../feautures/Specials";


type MobileMenuSectionProps = {
  categories: MenuCategory[];
};

export default function MobileMenuSection({
  categories,
}: MobileMenuSectionProps) {
  const [displayItems, setDisplayItems] = useState<Item[][]>([]);

  useEffect(() => {
    (async () => {
      if (categories.length === 0) return;

      try {
        const fetchedItems = await Promise.all(
          categories.map(async (category) => {
            const items = await getItemsbyCategories(category.id);
            return items;
          })
        );

        setDisplayItems(fetchedItems);
      } catch (error) {}
    })();
  }, [categories]);

  return (
    <div className="mobile-menu-section">
      {categories?.map((category, index) => (
        <DisplayMenu
          key={index}
          menuTitle={category.category_title}
          itemObjects={displayItems[index] || []}
        />
      ))}
    </div>
  );
}
