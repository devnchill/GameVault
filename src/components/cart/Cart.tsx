import { useOutletContext } from "react-router-dom";
import type { CartItem } from "./Cart.types";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart = () => {
  const { cartItems, removeFromCart } = useOutletContext<CartContextType>();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderBottom: "1px solid #ccc",
                padding: "1rem 0",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: 0 }}>
                  ₹{item.price} × {item.quantity}
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Cart;
