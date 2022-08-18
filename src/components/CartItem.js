import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../context/cart_context';
import { cartItems } from '../pages/CartPage';
import styled from 'styled-components';

function CartItem({ id, name, price, category, img, amount }) {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  return (
    <Wrapper>
      <div className="item-details">
        <img class="image-item" src={img} alt="" />

        <div class="item-content">
          <h5 class="item-title">{name}</h5>
          <h5 class="item-price">{price}$</h5>
          <div class="counter">
            <button class="increase-btn btn" onClick={() => decreaseItem(id)}>
              -
            </button>
            <div class="amount">{amount}</div>
            <button class="increase-btn btn" onClick={() => increaseItem(id)}>
              +
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="remove-btn btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.main`
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .image-item {
    width: 15%;
    text-align: center;
    margin-right: 50px;
  }
  .image-item img {
    height: 100px;
  }
  .item-content {
  }
  .item-title {
    padding-bottom: 4px;
  }
  .item-details {
    display: flex;
  }
  .item-price {
    color: #909090;
    font-weight: 500;
  }

  .remove-btn {
    background-color: transparent;
  }
`;
