import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import type { CartItem } from "./components/cart/Cart.types";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev: CartItem[]): CartItem[] =>
      prev.filter((item) => item.id !== id),
    );
  };

  return (
    <>
      <NavBar noOfItemsInCart={cartItems.length} />
      <Outlet context={{ cartItems, addToCart, removeFromCart }} />
      <Footer />
    </>
  );
}
