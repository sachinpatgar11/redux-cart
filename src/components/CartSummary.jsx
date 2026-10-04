const CartSummary = ({ items }) => {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <aside className="cart-summary">
      <h2>Cart Summary</h2>

      <div className="summary-row">
        <span>Total Items</span>
        <strong>{totalQuantity}</strong>
      </div>

      <div className="summary-row">
        <span>Total Price</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <hr />

      <div className="summary-total">
        <span>Grand Total</span>
        <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <button className="checkout-btn">Proceed to Checkout</button>
    </aside>
  );
};

export default CartSummary;
