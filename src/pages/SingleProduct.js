import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import { useState } from 'react';
import Rating from '../components/Rating';

import styled from 'styled-components';
import AddToCart from '../components/AddToCart';
import { formatPrice } from '../components/Product';

function SingleProduct() {
  const [product, setProduct] = useState('');

  const { id } = useParams();

  const {
    name,
    category,
    img,
    price,
    countInStock,
    rating,
    numberOfReviews,
    description,
  } = product;

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, []);
  return (
    <Wrapper className="section-padding">
      <Link to="/products" className="btn back-to-products">
        Back To Products
      </Link>
      <div className="single-product-details">
        <div className="single-product-img">
          <img src={img} alt="" />
        </div>
        <div className="single-product-content">
          <h6>Home / Products / {category}</h6>
          <h4>{name}</h4>
          <Rating rating={rating} numberOfReviews={numberOfReviews} />

          <h2>{formatPrice(price)}</h2>

          {countInStock > 0 ? (
            <AddToCart product={product} />
          ) : (
            <span>Out Of Stock</span>
          )}
          <h4>Product Details</h4>
          <span>{description}</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;

const Wrapper = styled.main`
  .single-product {
    margin-top: 20px;
  }
  .single-product-details {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .single-product-img {
    margin: 70px;
  }
  .single-product img {
    width: 100%;
    margin-right: 50px;
  }
  .single-product-content {
    width: 40%;
    padding-top: 30px;
  }
  .single-product-content h4 {
    padding: 40px 0 20px 0;
  }
  .single-product-content h2 {
    font-size: 26px;
  }
  .single-product-content input {
    width: 50px;
    height: 47px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px;
  }
  .single-product-content button {
  }
  .single-product-content span {
    line-height: 25px;
  }
  .back-to-products {
    margin: 40px;
  }
`;
