import { useEffect, useState } from "react";
import styles from "./Store.module.css";
import { useOutletContext } from "react-router-dom";
import type { CartItem } from "../cart/Cart.types";
import type { TGame } from "./Store.types";

const Store = () => {
  const [games, setGames] = useState<TGame[]>([]);
  const { addToCart } = useOutletContext<{
    addToCart: (item: CartItem) => void;
  }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_REACT_APP_RAWG_API_KEY;
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch games");
        return res.json();
      })
      .then((data) => {
        setGames(data.results || []);
      })
      .catch((err) => console.error("Error fetching games:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className={styles.store}>
        <h1>Loading games...</h1>
      </main>
    );
  }

  return (
    <main className={styles.store}>
      <h1>Game Store</h1>
      <div className={styles.game_grid}>
        {games.map((game) => {
          const item: CartItem = {
            id: game.id,
            name: game.name,
            image: game.background_image,
            price: game.metacritic ?? 60,
            quantity: 1,
          };

          return (
            <div key={game.id} className={styles.game_card}>
              <img src={game.background_image} alt={game.name} />
              <h3>{game.name}</h3>
              <h4 className={styles.price}>₹{item.price}</h4>
              <div className={styles.card_actions}>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button>More Info</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Store;
