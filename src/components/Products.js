import React from 'react';
import products from '../data';
import Product from './Product';

function Products() {
  return (
    <div className="products-container">
      {products.map((product) => {
        const { id, name, img, price, rating } = product;

        return <Product key={id} {...product} />;
      })}
    </div>
  );
}

export default Products;
