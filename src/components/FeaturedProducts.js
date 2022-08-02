import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import products from '../data';
import Product from './Product';

function FeaturedProducts() {
  return (
    <section className="featured-products section-padding">
      <h2>Featured Products</h2>
      <p>Lorem ipsum dolor sit consectetur</p>
      <div className="products-container">
        {products.slice(0, 4).map((product) => {
          const { id, name, img, price, rating } = product;

          return <Product key={id} {...product} />;
        })}
      </div>

      <Link to="/products">
        <button className="show-more">All Products</button>
      </Link>
    </section>
  );
}

export default FeaturedProducts;
