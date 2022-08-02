import React from 'react';
import Products from '../components/Products';
import { Link, link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
function ProductsPage() {
  return (
    <section className="products-page">
      <div className="products-page-header">
        <h2>ONLINE SURF SHOP</h2>
      </div>
      <div className="section-padding ">
        <Products />
      </div>
      <div className="pagination">
        <Link to={'/products'}>
          <span>1</span>
        </Link>
        <Link to={'/products'}>
          <span>2</span>
        </Link>
        <Link to={'/products'}>
          <span>
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default ProductsPage;
