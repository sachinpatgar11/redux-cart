import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../features/theme/themeSlice";

import { selectCartTotalQuantity } from "../features/cart/cartSelectors";

const Header = () => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(selectCartTotalQuantity);

  const theme = useSelector((state) => state.theme.mode);

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
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
