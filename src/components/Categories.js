import React from 'react';

function Categories() {
  return (
    <section className="section-padding categories">
      <div className="category-box surf-box">
        <h2>SURF</h2>
        <button>More Products</button>
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
      </div>
    </section>
  );
}

export default Categories;
