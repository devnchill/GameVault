import { useOutletContext } from "react-router-dom";
import type { CartItem } from "./Cart.types";
import styles from "./Cart.module.css";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart = () => {
  const { cartItems, removeFromCart } = useOutletContext<CartContextType>();

  return (
    <main className={styles.main}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.list}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.details}>
                <h3 className={styles.title}>{item.name}</h3>
                <p className={styles.price}>
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
