import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import type { INavProp } from "./NavBar.types";

const NavBar = ({ itemsInCart }: INavProp) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const ThemeIcon = theme === "light" ? MdDarkMode : MdLightMode;

  return (
    <nav className={`${style.flex_between} ${style.navbar}`}>
      <div>
        <Link to="/">GameVault</Link>
      </div>
      <div className={style.flex_between}>
        <ul className={`${style.flex_between} ${style.ul}`}>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/cart" className={style.nav_cart}>
              Cart<span>{itemsInCart > 0 && itemsInCart}</span>
            </Link>
          </li>
          <li>
            <ThemeIcon className={style.react_icons} onClick={toggleTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
