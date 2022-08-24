import React from 'react';
import { Link } from 'react-router-dom';

import products from '../data';
import Product from './Product';
import styled from 'styled-components';

function FeaturedProducts() {
  return (
    <Wrapper className="section-padding">
      <h2>Featured Products</h2>
      <p>Lorem ipsum dolor sit consectetur</p>
      <div className="products-container">
        {products
          .filter((product) => product.featuredProduct === true)
          .map((product) => {
            const { id } = product;

            return <Product key={id} {...product} />;
          })}
      </div>

      <Link to="/products">
        <button className="show-more btn">All Products</button>
      </Link>
    </Wrapper>
  );
}

export default FeaturedProducts;

const Wrapper = styled.main`
  text-align: center;

  .products-container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
  }
`;
