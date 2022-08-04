import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product({ id, name, img, price, rating, numberOfReviews }) {
  return (
    <div key={id} className="product">
      <img src={img} alt="" />
      <div className="product-description">
        <h5>{name}</h5>
        <Rating rating={rating} numberOfReviews={numberOfReviews} />
        <h4>{price}$</h4>
      </div>
      <Link to={'/cart'} className="cart">
        <FaShoppingCart />
      </Link>
      <Link to={`/${id}`} className="details">
        Details
      </Link>
    </div>
  );
}

export default Product;
