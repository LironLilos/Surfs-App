import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../components/Context';
import { cartItems } from '../pages/CartPage';

function CartItem({ id, name, price, category, img, amount }) {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  return (
    <div class="cart-item">
      <div className="item-details">
        <img class="image-item" src={img} alt="" />

        <div class="item-content">
          <h5 class="item-title">{name}</h5>
          <h5 class="item-price">{price}$</h5>
          <div class="counter">
            <button class="increase-btn" onClick={() => decreaseItem(id)}>
              -
            </button>
            <div class="amount">{amount}</div>
            <button class="increase-btn" onClick={() => increaseItem(id)}>
              +
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
