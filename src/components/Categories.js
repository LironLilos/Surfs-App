import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const sportProducts = ['surf', 'skate', 'sup', 'wind', 'kite'];

function Categories() {
  const [sportProduct, setSportProduct] = useState('');

  return (
    <section className="section-padding categories">
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
              {' '}
              <button>More Products</button>
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
    </section>
  );
}

export default Categories;
