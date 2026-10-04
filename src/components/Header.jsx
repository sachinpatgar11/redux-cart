import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../features/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const theme = useSelector((state) => state.theme.mode);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/products" className="logo">
          ShopNow
        </Link>

        <nav>
          <Link to="/products">Products</Link>

          <Link to="/cart" className="cart-link">
            Cart
            <span className="cart-count">{cartQuantity}</span>
          </Link>

          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
