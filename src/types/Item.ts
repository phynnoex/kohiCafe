export interface AddOn {
  name: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  category_title: string;
}

export interface Item {
  item_name: string;
  item_image: string;
  item_price: number;
  item_category: string;
  add_ons: string[];
  item_description: string;
}
