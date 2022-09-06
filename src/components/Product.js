import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { BsHandbag } from 'react-icons/bs';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import { useCartContext } from '../context/cart_context';

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

function Product(product) {
  const { addToCart } = useCartContext();
  const { id, name, img, price, rating, numberOfReviews, countInStock } =
    product;
  const amount = 1;

  return (
    <Wrapper key={id}>
      <img src={img} alt="" />
      <div className="product-description">
        <h5>{name}</h5>
        <Rating rating={rating} numberOfReviews={numberOfReviews} />
        <p className="price">{formatPrice(price)}</p>
      </div>
      <div className="cart-details-links">
        {/*   {countInStock > 0 ? (
          <AddToCart product={product} />
        ) : (
          <p>Out Of Stock</p>
        )} */}

        <Link to={`/${id}`} className="details">
          Details
        </Link>
        {countInStock > 0 ? (
          <Link to={'/cart'} className="cart">
            <BsHandbag onClick={() => addToCart(id, amount, product)} />
          </Link>
        ) : (
          <p>Out Of Stock</p>
        )}
      </div>
    </Wrapper>
  );
}

export default Product;

const Wrapper = styled.main`
  width: 23%;
  min-width: 250px;
  padding: 10px 12px;
  border: 1px solid #d7e9f7;
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

  .cart-details-links {
    display: flex;
    justify-content: space-between;
  }
  .cart svg {
    border-radius: 50px;
    background-color: #d7e9f7;
    padding: 4px;
    font-size: 30px;
    fill: #5584ac;
    ${'' /*   border: 1px solid #d7e9f7; */}
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
