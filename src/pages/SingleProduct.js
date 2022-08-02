import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';
import { useState } from 'react';
import Rating from '../components/Rating';
/* import FeaturedProducts from '../components/FeaturedProducts'; */

function SingleProduct() {
  const [product, setProduct] = useState('surfboard');
  console.log(useParams);
  const { id } = useParams();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, []);
  return (
    <section className="section-padding">
      <Link to="/products" className="btn back-to-products">
        Back To Products
      </Link>
      <div className="single-product-details">
        <div className="single-product-img">
          <img src={product.img} alt="" />
        </div>
        <div className="single-product-content">
          <h6>Home / Products / {product.category}</h6>
          <h4>{product.name}</h4>
          <Rating
            rating={product.rating}
            numberOfReviews={product.numberOfReviews}
          />
          <h5>
            Available:{' '}
            <span>
              {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}{' '}
            </span>
          </h5>
          <h2>{product.price} $</h2>
          <input type="number" value="1" min="1" max="3"></input>
          <button>Add To Cart</button>
          <h4>Product Details</h4>
          <span>{product.description}</span>
        </div>
      </div>
      {/* <FeaturedProducts /> */}
    </section>
  );
}

export default SingleProduct;
