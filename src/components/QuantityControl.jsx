import React from "react";

function QuantityControl({ quantity, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="quantity-control">
      {quantity === 1 ? (
        <button className="remove-btn" onClick={onRemove}>
          Remove
        </button>
      ) : (
        <button className="quantity-btn" onClick={onDecrease}>
          −
        </button>
      )}
      <span className="quantity">{quantity}</span>

      <button className="quantity-btn" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityControl;
