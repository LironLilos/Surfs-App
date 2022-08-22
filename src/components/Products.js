import React from 'react';
import products from '../data';
import Product from './Product';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';

function Products() {
  const {
    products,
    filtered_products,
    filters: { text, category, min_price, max_price, price, inStock },
    updateFilters,
    clearFilters,
  } = useProductsContext();
  return (
    <Wrapper>
      {filtered_products.map((product) => {
        const { id } = product;
        return <Product key={id} {...product} />;
      })}
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-wrap: wrap;
`;
