import React from 'react';
import products from '../data';
import Product from './Product';
import styled from 'styled-components';

function Products({ categoryProduct }) {
  return (
    <Wrapper className="products-container">
      <div className="products-container">
        {categoryProduct === 'all'
          ? products.map((product) => {
              const { id, name, img, price, rating } = product;

              return <Product key={id} {...product} />;
            })
          : products
              .filter((product) => product.category === categoryProduct)
              .map((product) => {
                const { id, name, img, price, rating } = product;

                return <Product key={id} {...product} />;
              })}

        {/* {products
          .filter((product) => product.category === categoryProduct)
          .map((product) => {
            const { id, name, img, price, rating } = product;

            return <Product key={id} {...product} />;
          })} */}
      </div>
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.main`
  .products-container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
  }
`;
