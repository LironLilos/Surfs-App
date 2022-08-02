import React from 'react';
import products from '../data';
import Product from './Product';

function Products({ categoryProduct }) {
  return (
    <div className="products-container">
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
    </div>
  );
}

export default Products;
