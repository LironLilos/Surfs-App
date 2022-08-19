import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
function AddToCart({ product }) {
  const { id, countInStock } = product;

  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > countInStock) {
        tempAmount = countInStock;
      }
      return tempAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="amount-container">
        <button type="button" className="amount-btn" onClick={decreaseAmount}>
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button type="button" className="amount-btn" onClick={increaseAmount}>
          <FaPlus />
        </button>
        <Link to={'/cart'} className="btn">
          Add To Cart
        </Link>
      </div>
    </Wrapper>
  );
}

export default AddToCart;

const Wrapper = styled.main`
  margin-top: 1rem;

  .amount-container {
    display: flex;
    margin-bottom: 1rem;
  }
  .amount-btn {
    margin-right: 1rem;
    pointer: cursor;
    border: none;
    border-radius: 50%;
    background: none;
  }
  .amount {
    margin-right: 1rem;
  }
`;
