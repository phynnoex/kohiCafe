import { createContext, useContext, useEffect, useState,} from "react";
import type { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Item } from "./types/Item";

// Define each cart item type
type CartItem = {
  id: string;
  item: Item;
  coffeeSize: number | null;
  addOnsQuantity: Record<string, number>;
  quantity: number;
};

// Define the whole cart shape
type Cart = {
  id: string;
  cartItems: CartItem[];
};

// Define the context interface
interface CartContextType {
  cart: Cart;
  addToCart: (
    item: Item,
    quantity: number,
    coffeeSize: number | null,
    addOnsQuantity: Record<string, number>
  ) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateItemQuantity: (id: string, newQuantity: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider props
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>(() => {
    const saved = localStorage.getItem("cart");
    return saved
      ? JSON.parse(saved)
      : {
          id: uuidv4(),
          cartItems: [],
        };
  });

  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (
    item: Item,
    quantity: number,
    coffeeSize: number | null,
    addOnsQuantity: Record<string, number>
  ) => {
    const exists = cart.cartItems.find(
      (cartItem) =>
        cartItem.item.item_name === item.item_name &&
        cartItem.coffeeSize === coffeeSize &&
        JSON.stringify(cartItem.addOnsQuantity) === JSON.stringify(addOnsQuantity)
    );

    if (exists) return;

    const newItem: CartItem = {
      id: `item-${uuidv4()}`,
      item,
      coffeeSize,
      addOnsQuantity,
      quantity,
    };

    setCart((prev) => ({
      ...prev,
      cartItems: [...prev.cartItems, newItem],
    }));
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    const result = confirm("Are you sure you want to remove this item?");
    if (result) {
      setCart((prev) => ({
        ...prev,
        cartItems: prev.cartItems.filter((i) => i.id !== id),
      }));
    }
  };

  //update item quantity
  const updateItemQuantity = (id: string, newQuantity: number) => {
    setCart((prev) => ({
      ...prev,
      cartItems: prev.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ),
    }));
  };

  // Clear the cart
  const clearCart = () => {
    setCart({
      id: uuidv4(),
      cartItems: [],
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
