import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

import QuantityControl from "../components/QuantityControl";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>Add some products to your cart to see them here.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="page-container">
        <h1>Your Cart</h1>

        <div className="cart-layout">
          {/* LEFT */}
          <section className="cart-items">
            <h2>Cart Items</h2>

            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-product-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-product-details">
                  <h3>{item.title}</h3>

                  <p className="category">{item.category}</p>

                  <p>Unit Price: ${item.price.toFixed(2)}</p>

                  <QuantityControl
                    quantity={item.quantity}
                    onIncrease={() => dispatch(increaseQuantity(item.id))}
                    onDecrease={() => dispatch(decreaseQuantity(item.id))}
                    onRemove={() => dispatch(removeFromCart(item.id))}
                  />
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </section>

          {/* RIGHT */}
          <CartSummary items={items} />
        </div>
      </div>
    </main>
  );
};

export default Cart;
