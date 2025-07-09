import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [itemsInCart, setItemsInCart] = useState<number>(0);
  const updateCart = () => setItemsInCart((prev) => prev + 1);

  return (
    <>
      <NavBar itemsInCart={itemsInCart} />
      <Outlet context={updateCart} />
      <Footer />
    </>
  );
}

export default App;
