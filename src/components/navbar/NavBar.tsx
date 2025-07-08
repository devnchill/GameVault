import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">GameVault</Link>
        </li>
        <li>
          <Link to="Store">Store</Link>
        </li>
        <li>
          <Link to="Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
