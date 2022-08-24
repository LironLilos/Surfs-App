import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import styled from 'styled-components';
import { formatPrice } from '../components/Product';

function CartItem({ id, name, price, category, img, amount }) {
  const { removeItem, increaseItem, decreaseItem } = useCartContext();
  return (
    <Wrapper>
      <div className="item-details">
        <img class="image-item" src={img} alt="" />
        <div class="item-content">
          <h5 class="item-title">{name}</h5>
          <h5 class="item-price">{formatPrice(price)}</h5>
          <h5 class="item-price">
            {' '}
            Total Price: {formatPrice(price * amount)}
          </h5>
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
