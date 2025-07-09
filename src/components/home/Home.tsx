import { Link } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.main}>
      <h1 className={style.heading}>Welcome to GameVault 🎮</h1>
      <p>
        Dive into a world of games. Discover, buy, and play your favorite
        titles—all in one place.
      </p>
      <button>
        <Link to="/store">Browse the Store</Link>
      </button>
    </main>
  );
};

export default Home;
