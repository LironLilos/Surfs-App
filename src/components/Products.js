import React from 'react';
import Product from './Product';
import styled from 'styled-components';

function Products({ filteredProductsPages }) {
  return (
    <Wrapper>
      {filteredProductsPages.map((product) => {
        const { id } = product;
        return <Product key={id} {...product} />;
      })}
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
`;
