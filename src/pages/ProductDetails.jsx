import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

import QuantityControl from "../components/QuantityControl";
import Loader from "../components/Loader";
import { getProductById } from "../services/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === Number(id)),
  );

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError("Unable to load product details.");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return (
      <div className="page-message error">
        <h2>Product Not Found</h2>
        <p> {error || "The requested product does not exist."} </p>
        <Link to="/products" className="back-products-btn">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <main className="product-details-page">
      <div className="page-container">
        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
        <div className="product-details-card">
          <div className="product-details-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details-content">
            <span className="category"> {product.category} </span>
            <h1>{product.title}</h1>
            <p className="product-details-price">${product.price.toFixed(2)}</p>
            <div className="product-description">
              <h2>Description</h2> <p> {product.description} </p>
            </div>
            <div className="product-details-actions">
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
              <Link to="/cart" className="view-cart-btn">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
