import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import QuantityControl from "./QuantityControl";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id),
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <span className="category">{product.category}</span>

        <h3>{product.title}</h3>

        <p className="product-price">${product.price.toFixed(2)}</p>

        {!cartItem ? (
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <QuantityControl
            quantity={cartItem.quantity}
            onIncrease={() => dispatch(increaseQuantity(product.id))}
            onDecrease={() => dispatch(decreaseQuantity(product.id))}
            onRemove={() => dispatch(removeFromCart(product.id))}
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
