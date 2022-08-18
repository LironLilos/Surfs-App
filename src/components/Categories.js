import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import supImg from '../assets/cropped-image-confident-woman-standing-with-paddle-surfboard-sup-sport-hobby-yoga.jpg';
import skateImg from '../assets/image-from-rawpixel-id-3297192-jpeg.jpg';
import surfImg from '../assets/man-riding-wave-sunrise.jpg';
import windImg from '../assets/erez.jpg';
import kiteImg from '../assets/kitesurfing-malzemeleri.webp';

const sportProducts = ['surf', 'skate', 'sup', 'wind', 'kite'];

function Categories() {
  const [sportProduct, setSportProduct] = useState('');

  return (
    <Wrapper className="section-padding ">
      {sportProducts.map((sportProduct, index) => {
        return (
          <div key={index} className={`category-box ${sportProduct}-box`}>
            <h2>{sportProduct}</h2>
            <Link
              onClick={() => {
                setSportProduct(sportProduct);
                console.log(sportProduct);
              }}
              to={{ pathname: '/products', sportProduct: { sportProduct } }}
            >
              <button className="btn">More Products</button>
            </Link>
          </div>
        );
      })}
      {/*   <div className="category-box surf-box">
        <h2>SURF</h2>
        <Link to="/products">
          <button>More Products</button>
        </Link>
      </div>
      <div className="category-box skate-box">
        <h2>SKATE</h2>
        <button>More Products</button>
      </div>
      <div className="category-box sup-box sec-raw">
        <h2>SUP</h2>
        <button>More Products</button>
      </div>
      <div className="category-box wind-box sec-raw">
        <h2>WIND SURF</h2>
        <button>More Products</button>
      </div>
      <div className="category-box kite-box sec-raw">
        <h2>KITE SURF</h2>
        <button>More Products</button>
      </div> */}
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
  .category-box h2 {
    color: #fff;
    padding-bottom: 8px;
  }
  .category-box button {
    background-color: transparent;
    border: 1px solid white;
    color: #fff;
    outline: none;
    transition: 0.2s;
  }
  .category-box:hover button {
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
  .wind-box {
    background-image: url(${windImg});
    grid-column: 3/5;
    grid-row: 2;
  }
  .kite-box {
    background-image: url(${kiteImg});
    grid-column: 5/7;
    grid-row: 2;
  }
`;
