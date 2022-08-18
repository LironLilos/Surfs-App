import React from 'react';
import Products from '../components/Products';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';

import backgroundImg from '../assets/image-from-rawpixel-id-3282142-jpeg.jpg';
const sportCategories = [
  'all',
  'surf',
  'skate',
  'sup',
  'wind-surf',
  'kite-surf',
];

const reducer = (state, action) => {};
function ProductsPage() {
  const [categoryProduct, setCategoryProduct] = useState('all');

  return (
    <Wrapper>
      <div className="products-page-header">
        <h2>ONLINE SURF SHOP</h2>
      </div>
      <div className="filters">
        <h5>category</h5>
        {sportCategories.map((sport, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => {
                setCategoryProduct(sport);
              }}
            >
              {sport}
            </button>
          );
        })}
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
    </Wrapper>
  );
}

export default ProductsPage;

const Wrapper = styled.main`
  margin-bottom: 40px;

  .products-page-header {
    background-image: url(${backgroundImg});
    width: 100%;
    height: 40vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
  .products-page-header h2 {
    color: #fff;
  }

  .pagination {
    text-align: center;
  }
  .pagination span {
    background-color: #088178;
    color: #fff;
    font-weight: 600;
    padding: 15px 20px;
    margin-left: 4px;
    border-radius: 4px;
  }
  .pagination svg {
    fill: #fff;
    font-size: 16px;
  }
`;
