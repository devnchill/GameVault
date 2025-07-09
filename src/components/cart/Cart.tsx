import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const updateCart = useOutletContext<() => void>();

  return (
    <main>
      <button onClick={updateCart}>Click me to buy</button>
    </main>
  );
};

export default Cart;
