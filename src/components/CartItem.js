import React from 'react';
import { FaTrash } from 'react-icons/fa';

function CartItem({ id, name, price, category, img }) {
  return (
    <div class="cart-item">
      <div class="image-item">
        <img src={img} alt="" />
      </div>
      <div class="item-details">
        <h4 class="item-title">{name}</h4>
        <h4 class="subtitle">{category}</h4>
      </div>
      <div class="counter">
        <div class="increase-btn">-</div>
        <div class="amount">2</div>
        <div class="increase-btn">+</div>
      </div>
      <div class="prices">
        <div class="price">
          <h4>{price} $</h4>
        </div>

        <div class="remove">
          <button type="button" className="remove-btn">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
