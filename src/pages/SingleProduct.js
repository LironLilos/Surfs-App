import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import { useState } from 'react';
import Rating from '../components/Rating';
/* import FeaturedProducts from '../components/FeaturedProducts'; */
import styled from 'styled-components';

function SingleProduct() {
  const [product, setProduct] = useState('surfboard');
  console.log(useParams);
  const { id } = useParams();

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
          <img src={product.img} alt="" />
        </div>
        <div className="single-product-content">
          <h6>Home / Products / {product.category}</h6>
          <h4>{product.name}</h4>
          <Rating
            rating={product.rating}
            numberOfReviews={product.numberOfReviews}
          />
          <h5>
            Available:{' '}
            <span>
              {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}{' '}
            </span>
          </h5>
          <h2>{product.price} $</h2>
          <input type="number" value="1" min="1" max="3"></input>
          <button className="btn">Add To Cart</button>
          <h4>Product Details</h4>
          <span>{product.description}</span>
        </div>
      </div>
      {/* <FeaturedProducts /> */}
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
