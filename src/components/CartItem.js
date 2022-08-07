import React from 'react';
import { FaTrash } from 'react-icons/fa';

function CartItem({ id, name, price, category, img }) {
  return (
    <div class="cart-item">
      <div className="item-details">
        <img class="image-item" src={img} alt="" />

        <div class="item-content">
          <h5 class="item-title">{name}</h5>
          <h5 class="item-price">{price}$</h5>
          <div class="counter">
            <div class="increase-btn">-</div>
            <div class="amount">2</div>
            <div class="increase-btn">+</div>
          </div>
        </div>
      </div>
      <button type="button" className="remove-btn">
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
