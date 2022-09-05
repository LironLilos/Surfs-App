import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { BsHandbag } from 'react-icons/bs';
import styled from 'styled-components';

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

function Product({ id, name, img, price, rating, numberOfReviews }) {
  return (
    <Wrapper key={id}>
      <img src={img} alt="" />
      <div className="product-description">
        <h5>{name}</h5>
        <Rating rating={rating} numberOfReviews={numberOfReviews} />
        <p className="price">{formatPrice(price)}</p>
      </div>
      <div className="cart-details-links">
        <Link to={`/${id}`} className="details">
          Details
        </Link>
        <Link to={'/cart'} className="cart">
          <BsHandbag />
        </Link>
      </div>
    </Wrapper>
  );
}

export default Product;

const Wrapper = styled.main`
  width: 23%;
  min-width: 250px;
  padding: 10px 12px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2 ease;

  :hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
  }
  img {
    width: 100%;
    border-radius: 20px;
  }

  .product-description {
    text-align: start;
    padding: 10px 0;
  }
  .product-description h5 {
    padding-top: 7px;
    font-size: 14p;
  }

  .product-description h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
  }
  .cart-details-links {
    display: flex;
    justify-content: space-between;
  }
  .cart svg {
    border-radius: 50px;
    background-color: #e8f6ea;
    padding: 4px;
    font-size: 30px;
    fill: #088178;
    border: 1px solid #cce7d0;

    bottom: 20px;
    right: 14px;
  }
  button.show-more {
    margin-top: 1rem;
  }
  @media screen and (max-width: 800px) {
    .products-container {
      justify-content: center;
    }
    .featured-products .product {
      margin: 15px;
    }
  }
`;
