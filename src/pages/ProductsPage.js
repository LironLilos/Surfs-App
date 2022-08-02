import React from 'react';
import Products from '../components/Products';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';

const sportCategories = [
  'all',
  'surf',
  'skate',
  'sup',
  'wind-surf',
  'kite-surf',
];

function ProductsPage() {
  const [categoryProduct, setCategoryProduct] = useState('all');

  return (
    <section className="products-page">
      <div className="products-page-header">
        <h2>ONLINE SURF SHOP</h2>
      </div>
      <div className="small-categories">
        {sportCategories.map((sport) => {
          return (
            <button
              onClick={() => {
                setCategoryProduct(sport);
              }}
            >
              {sport}
            </button>
          );
        })}
        {/* <button
          onClick={() => {
            setCategoryProduct('all');
          }}
        >
          ALL
        </button>
        <button
          onClick={() => {
            setCategoryProduct('surf');
          }}
        >
          SURF
        </button>
        <button
          onClick={() => {
            setCategoryProduct('skate');
          }}
        >
          SKATE
        </button>
        <button
          onClick={() => {
            setCategoryProduct('sap');
          }}
        >
          SAP
        </button>
        <button
          onClick={() => {
            setCategoryProduct('wind-surf');
          }}
        >
          WIND SURF
        </button>
        <button
          onClick={() => {
            setCategoryProduct('kite-surf');
          }}
        >
          KITE SURF
        </button> */}
      </div>
      <div className="section-padding ">
        <Products categoryProduct={categoryProduct} />
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
