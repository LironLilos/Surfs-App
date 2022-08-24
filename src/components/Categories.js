import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import supImg from '../assets/cropped-image-confident-woman-standing-with-paddle-surfboard-sup-sport-hobby-yoga.jpg';
import skateImg from '../assets/image-from-rawpixel-id-3297192-jpeg.jpg';
import surfImg from '../assets/man-riding-wave-sunrise.jpg';
import windImg from '../assets/erez.jpg';
import kiteImg from '../assets/kitesurfing-malzemeleri.webp';
import { useProductsContext } from '../context/products_context';

const sportProducts = ['surf', 'skate', 'sup', 'wind-surf', 'kite-surf'];

function Categories() {
  const {
    filters: { search, category, min_price, max_price, price, inStock },
    updateFilters,
    clearFilters,
  } = useProductsContext();

  return (
    <Wrapper className="section-padding ">
      {sportProducts.map((sportProduct, index) => {
        return (
          <div key={index} className={`category-box ${sportProduct}-box`}>
            <Link
              name="category"
              className="btn category-link"
              onClick={updateFilters}
              to="/products"
            >
              {sportProduct}
            </Link>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default Categories;

const Wrapper = styled.main`
  display: grid;
  gap: 20px;

  .category-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center;
    height: 40vh;
    align-items: center;
    text-align: center;
    transition: transform 0.2s;
    border-radius: 5px;
    text-transform: uppercase;
  }
  .sec-raw {
    height: 30vh;
  }
  .category-box:hover {
    filter: blur(1);
  }
  ${
    '' /*  .category-box h2 {
    color: #fff;
    padding-bottom: 8px;
  } */
  }
  .category-link {
    background-color: transparent;
    border: 1px solid white;
    color: #fff;
    outline: none;
    transition: 0.2s;
    letter-spacing: 0.1rem;
  }
  .category-link:hover {
    background: #088178;
    border: 1px solid #088178;
  }
  .sup-box {
    background-image: url(${supImg});

    grid-column: 1/3;
    grid-row: 2;
  }
  .skate-box {
    background-image: url(${skateImg});
    grid-column: 4/7;
    grid-row: 1;
  }
  .surf-box {
    background-image: url(${surfImg});
    grid-column: 1/4;
    grid-row: 1;
  }
  .wind-surf-box {
    background-image: url(${windImg});
    grid-column: 3/5;
    grid-row: 2;
  }
  .kite-surf-box {
    background-image: url(${kiteImg});
    grid-column: 5/7;
    grid-row: 2;
  }
`;
